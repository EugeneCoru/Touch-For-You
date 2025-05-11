'use client'
import { useState, useEffect, useCallback } from 'react';
import { Ptag } from '../Ptag/ptag';
import styless from './animatedWord.module.scss'

interface AnimatedWordProps {
  word: string;
  maxFontSize?: number;
  duration?: number;
  color?: string;
}

export const AnimatedWord = ({
  word,
  maxFontSize = 10,
  duration = 3000,
  color = '#ffffff'
}: AnimatedWordProps) => {
  const [styles, setStyles] = useState<React.CSSProperties>({});
  const [isVisible, setIsVisible] = useState(true);

  const getRandomPosition = useCallback(() => {
    const screenWidth = window.innerWidth - 200; // -200 чтобы не вылезало за экран
    const screenHeight = window.innerHeight - 50;
    
    return {
      left: Math.random() * screenWidth,
      top: Math.random() * screenHeight
    };
  }, []);

  useEffect(() => {
    const position = getRandomPosition();
    
    setStyles({
      position: 'absolute',
      opacity: 0,
      fontSize: '5px',
      color: color,
      transition: `all ${duration}ms ease-out`,
      pointerEvents: 'none',
      zIndex: 9999,
      ...position
    });

    // Анимация появления
    requestAnimationFrame(() => {
      setStyles(prev => ({
        ...prev,
        opacity: 1,
        fontSize: `${maxFontSize}px`
      }));
    });

    // Таймер для исчезновения
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [maxFontSize, duration, color, getRandomPosition]);

  if (!isVisible) return null;

  return (
    <Ptag font='extra-light' size='small'
      className={styless.word}
      style={styles}
    >
      {word}
    </Ptag>
  );
};