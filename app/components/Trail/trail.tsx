'use client'
import { useEffect, useRef, useState } from "react";
import { TrailProps } from "./trail.props";


export const MouseTrail = ({
    color = '#49DAF5',
    length = 20,
    size = 20,
    blur = 30
  }: TrailProps) => {
    const [positions, setPositions] = useState<Array<[number, number]>>([]);
    const requestRef = useRef<number>();
    const pointerRef = useRef<[number, number]>([0, 0]);
  
    useEffect(() => {
      const handleMove = (e: MouseEvent) => {
        pointerRef.current = [e.clientX, e.clientY];
      };
  
      window.addEventListener('mousemove', handleMove);
      
      const animate = (time: number) => {
        setPositions(prev => {
          const newPositions = [...prev, pointerRef.current];
          return newPositions.slice(-length);
        });
        
        requestRef.current = requestAnimationFrame(animate);
      };
      
      requestRef.current = requestAnimationFrame(animate);
      
      return () => {
        window.removeEventListener('mousemove', handleMove);
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      };
    }, [length]);
  
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999
      }}>
        {positions.map(([x, y], index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              backgroundColor: color,
              opacity: 1 - index / positions.length,
              transform: `translate(-50%, -50%) scale(${1 - index/positions.length})`,
              filter: `blur(${blur}px)`,
              transition: 'all 0.3s ease-out',
            }}
          />
        ))}
      </div>
    );
  };