'use client'
import { useEffect, useRef } from 'react';
import styles from './video.module.scss'
import Image from 'next/image';


export const Video = ()=>{
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Попытка запустить видео при загрузке
    const playVideo = () => {
      video.play().catch((error) => {
        console.log("Автовоспроизведение заблокировано:", error);
      });
    };

    // Запуск при готовности метаданных
    video.addEventListener('loadedmetadata', playVideo);
    
    return () => video.removeEventListener('loadedmetadata', playVideo);
  }, []);



    return(
        <div className={styles.wrapper} id='main'>
            <div className={styles.shadow}></div>
            <Image src="major.jpg" alt="img" className={styles.video} fill sizes='100vw 100vh' unoptimized/>
          
            <a href="#products">
              <Image src="/arrow.png" alt="arrow" className={styles.arrow} width={50} height={50}/>
              </a>

        </div>
    )
}