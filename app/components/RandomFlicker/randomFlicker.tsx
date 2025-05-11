'use client'

import { useEffect, useState } from "react";
import { NeonGlowProps } from "./randomFlicker.props";
import styles from './randomFlicker.module.scss'




export const RandomFlicker = ({
    maxSize = 150,
    colors = ['#49DAF5', '#DB07BB', '#C307A6'],
    intensity = 0.3
  }: NeonGlowProps) => {
    const [glowState, setGlowState] = useState({
      position: { top: '50%', left: '50%' },
      size: 100,
      color: '#49DAF5',
      blur: 30,
      speed: 2,
      visible: false
    });
  
    const randomize = () => {
      const newState = {
        position: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`
        },
        size: Math.random() * maxSize + 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        blur: Math.random() * 50 + 20,
        speed: Math.random() * 3 + 1,
        visible: true
      };
  
      setGlowState(newState);
  
      // Время видимости = длительность анимации * 2
      const animationDuration = newState.speed * 1000 * 2;
      setTimeout(() => {
        setGlowState(prev => ({ ...prev, visible: false }));
      }, animationDuration);
    };
  
    useEffect(() => {
      const interval = setInterval(randomize, Math.random() * 3000 + 1000);
      return () => clearInterval(interval);
    }, []);
  
    return glowState.visible ? (
      <div
        className={styles.glow}
        style={{
          '--glow-color': glowState.color,
          '--glow-speed': `${glowState.speed}s`,
          '--glow-size': `${glowState.size}px`,
          '--glow-blur': `${glowState.blur}px`,
          opacity: intensity,
          top: glowState.position.top,
          left: glowState.position.left,
          transition: `opacity ${glowState.speed}s ease-out`
        } as React.CSSProperties}
      />
    ) : null;
  };