'use client'

import { CSSProperties, useEffect, useRef } from "react";
import { NeonPathProps } from "./line.props";
import styles from './line.module.scss';






export const LineNeon = ({
    path,
    strokeWidth = 1,
    className = '',
    style,
    duration = 4,
    delay = 0,
    top = '20%',
    left,
    right,
    bottom,
    glowIntensity = 0.9
  }: NeonPathProps) => {
    const pathRef = useRef<SVGPathElement>(null);
  
    useEffect(() => {
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        pathRef.current.style.strokeDasharray = `${length}`;
        pathRef.current.style.strokeDashoffset = `${length}`;
      }
    }, [path]);

    const containerStyle: CSSProperties = {
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        ...style
      };
    
      const svgStyle: CSSProperties = {
        width: '100%',
        height: '100%'
      };




    return (
        <div className={`neon-path-container ${className}`} style={containerStyle}>
          <svg 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
            style={svgStyle}
          >
            <path
              ref={pathRef}
              d={path}
              style={{
                strokeWidth,
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                animation: `
              color-change ${4 + duration}s infinite linear,
              glow-pulse ${2}s ease-in-out infinite
            `,
            filter: `
              drop-shadow(0 0 5px currentColor)
              drop-shadow(0 0 15px currentColor)
              drop-shadow(0 0 25px rgba(var(--glow-rgb), ${glowIntensity}))
            `,
            opacity: 0.9
              }}
            >
              <animate
                attributeName="stroke-dashoffset"
                from="100%"
                to="0"
                dur={`${duration}s`}
                begin={`${delay}s`}
                fill="freeze"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.25 0.1 0.25 1"
              />
            </path>
          </svg>

          <style jsx global>{`
        :root {
          --glow-rgb: #31AAE9;
        }

        @keyframes color-change {
          0% {
            stroke: #DB07BB;
            color: #DB07BB;
            --glow-rgb: 219, 7, 187;
          }
          25% {
            stroke: #4957F5;
            color: #4957F5;
            --glow-rgb: 73, 87, 245;
          }
          50% {
            stroke: #C307A6;
            color: #C307A6;
            --glow-rgb: 195, 7, 166;
          }
          75% {
            stroke: #31AAE9;
            color: #31AAE9;
            --glow-rgb: 49, 170, 233;
          }
          100% {
            stroke: #DB07BB;
            color: #DB07BB;
            --glow-rgb: 219, 7, 187;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            filter: 
              drop-shadow(0 0 5px currentColor)
              drop-shadow(0 0 15px currentColor)
              drop-shadow(0 0 25px rgba(var(--glow-rgb), ${glowIntensity}));
            opacity: 0.8;
          }
          50% {
            filter: 
              drop-shadow(0 0 10px currentColor)
              drop-shadow(0 0 25px currentColor)
              drop-shadow(0 0 40px rgba(var(--glow-rgb), ${glowIntensity}));
            opacity: 1;
          }
        }
      `}</style>
        </div>
      );
}