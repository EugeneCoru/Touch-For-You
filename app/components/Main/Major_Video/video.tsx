'use client'
import { useEffect, useRef } from 'react';
import styles from './video.module.scss'
import Image from 'next/image';


export const Video = ()=>{
    const videoRef = useRef<HTMLVideoElement>(null);

   

    useEffect(() => {
      const attemptPlay = () => {
        videoRef.current?.play()
          .catch(error => {
            console.log('Ошибка автовоспроизведения:', error);
          });
      };
  
      // Задержка для обхода ограничений StrictMode
      const timeout = setTimeout(attemptPlay, 300);
      
      return () => clearTimeout(timeout);
    }, []);



    return(
        <div className={styles.wrapper} id='main'>
            <div className={styles.shadow}></div>
            {/* <Image src="major.jpg" alt="img" className={styles.video} fill sizes='100vw 100vh' unoptimized/> */}
          <video ref={videoRef} muted autoPlay playsInline loop preload="auto" className={styles.video}>     <source src={'video_touch.mp4'} type="video/mp4" /></video>  
          <div className={styles.shadow_all}></div>     
            <a href="#products">
              <Image src="/arrow.png" alt="arrow" className={styles.arrow} width={50} height={50}/>
              </a>

        </div>
    )
}