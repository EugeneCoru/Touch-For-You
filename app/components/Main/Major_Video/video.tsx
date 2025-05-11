'use client'
import { useEffect, useRef } from 'react';
import { Arrow } from '../../Arrow/arrow'
import styles from './video.module.scss'


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
             <img src="major.jpg" alt="img" className={styles.video}/>
             {/* <video src='video.mp4' className={styles.video} playsInline muted autoPlay loop ref={videoRef}><source src="video.mp4" type="video/mp4" /></video> */}
            {/* <Arrow className={styles.arrow}/> */}
            <a href="#products"><img src="arrow.png" alt="arrow" className={styles.arrow}/></a>

        </div>
    )
}