/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useRef, useState } from "react";
import { ImageSliderProps } from "./slider.props";
import styles from "./slider.module.scss";
import Image from "next/image";


export const ImageSlider =  ({
  images,
  autoPlay = true,
  interval = 5000
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (autoPlay && images.length > 2) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex(prev => 
          prev >= images.length - 2 ? 0 : prev + 2
        );
      }, interval);
    }
    return () => resetTimeout();
  }, [currentIndex]);

  // Создаем пары изображений
  const slides = [];
  for (let i = 0; i < images.length; i += 2) {
    slides.push(images.slice(i, i + 2));
  }

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.slider}
        style={{
          transform: `translateX(-${currentIndex * 50}%)`
        }}
      >
        {slides.map((pair, index) => (
          <div key={index} className={styles.slidePair}>
            {pair.map((image, idx) => (
              <div key={`${index}-${idx}`} className={styles.slide}>
                <div className={styles.shadow_up}></div>
                <div className={styles.shadow_down}></div>


                
                  <Image 
                  quality={75}
                  src={image} 
                  alt={`Slide ${index * 2 + idx + 1}`} 
                  className={styles.image}
                  loading="lazy" width={500} height={500}/>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
