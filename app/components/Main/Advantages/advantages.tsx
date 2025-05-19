'use client'
import { text } from '@/app/text'
import { Htag } from '../../Htag/htag'
import { Ptag } from '../../Ptag/ptag'
import styles from './advantages.module.scss'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image';



export const Advantages = () => {
    const oneRef = useRef(null);
    const twoRef = useRef(null);
    const threeRef = useRef(null);
    const fourRef = useRef(null);
    
  
  // Настройка Intersection Observer
    const isInView = useInView(oneRef, {
    once: true, // Анимация сработает только один раз
    margin: "-10px 0px -10px 0px", // Регулирует зону срабатывания
    
        });
    const isInViewTwo = useInView(twoRef, {
    once: true, 
    margin: "-10px 0px -10px 0px", 
    
  });
  const isInViewThree = useInView(threeRef, {
    once: true, 
    margin: "-10px 0px -10px 0px", 
    
  });
  const isInViewFour = useInView(fourRef, {
    once: true, 
    margin: "-10px 0px -10px 0px", 
    
  });


    return(
        <div className={styles.wrapper}>
            <div className={styles.shadow_container_up}></div>
            <div className={styles.shadow_container_down}></div>
            <Htag size="large" className={styles.title}>ПРЕИМУЩЕСТВА</Htag>
            <div className={styles.container}>
                <div className={styles.cont_video}>
                {/* <img src={text.advantages.image} alt="img" className={styles.video}/> */}
                <Image loading="lazy" quality={75} src={text.advantages.image} alt='image' className={styles.video} width={1000} height={1000}/>
                <div className={styles.shadow}></div>
                <div className={styles.shadow_left}></div>
                <div className={styles.shadow_right}></div>
                <div className={styles.shadow_up}></div>
                </div>
                <div className={styles.content}>
                    <ul ref={oneRef}>
                        <motion.li 
    initial={{ opacity: 0, y: 100 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: "easeInOut" }}>
                            <Image  loading="lazy" quality={75} src={text.advantages.icon.one} alt="icon" className={styles.icon} width={150} height={150} />
                            <Ptag font='regular' size='medium'>{text.advantages.advantage_1}</Ptag>
                        </motion.li>
                        <motion.li ref={twoRef}
    initial={{ opacity: 0, y: 100 }}
    animate={isInViewTwo ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1, ease: "easeInOut" }}>
                            <Image loading="lazy" quality={75} src={text.advantages.icon.two} alt="icon" className={styles.icon} width={150} height={150} />
                            <Ptag font='regular' size='medium'>{text.advantages.advantage_2}</Ptag>
                        </motion.li>
                        <motion.li ref={threeRef}
                        initial={{ opacity: 0, y: 100 }}
                        animate={isInViewThree ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeInOut" }}>
                            <Image loading="lazy" quality={75} src={text.advantages.icon.three} alt="icon" className={styles.icon} width={150} height={150}/>
                            <Ptag font='regular' size='medium'>{text.advantages.advantage_3}</Ptag>
                        </motion.li>
                        <motion.li ref={fourRef}
                        initial={{ opacity: 0, y: 100 }}
                        animate={isInViewFour ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeInOut" }}>
                            <Image  loading="lazy" quality={75} src={text.advantages.icon.four} alt="icon" className={styles.icon} width={150} height={150}/>
                            <Ptag font='regular' size='medium'>{text.advantages.advantage_4}</Ptag>
                        </motion.li>
                    </ul>
                </div>
            </div>

        </div>
    )
}