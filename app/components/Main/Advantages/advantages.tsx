'use client'
import { text } from '@/app/text'
import { Htag } from '../../Htag/htag'
import { Ptag } from '../../Ptag/ptag'
import styles from './advantages.module.scss'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'



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
    once: true, // Анимация сработает только один раз
    margin: "-10px 0px -10px 0px", // Регулирует зону срабатывания
    
  });
  const isInViewThree = useInView(threeRef, {
    once: true, // Анимация сработает только один раз
    margin: "-10px 0px -10px 0px", // Регулирует зону срабатывания
    
  });
  const isInViewFour = useInView(fourRef, {
    once: true, // Анимация сработает только один раз
    margin: "-10px 0px -10px 0px", // Регулирует зону срабатывания
    
  });


    return(
        <div className={styles.wrapper}>
            <div className={styles.shadow_container_up}></div>
            <div className={styles.shadow_container_down}></div>
            <Htag size="large" className={styles.title}>ПРЕИМУЩЕСТВА</Htag>
            <div className={styles.container}>
                <div className={styles.cont_video}>
                <img src={text.advantages.image} alt="img" className={styles.video}/>
                <div className={styles.shadow}></div>
                <div className={styles.shadow_left}></div>
                <div className={styles.shadow_right}></div>
                <div className={styles.shadow_up}></div>
                </div>
                <div className={styles.content}>
                    <ul ref={oneRef}>
                        <motion.li 
    initial={{ opacity: 0, y: 300 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1.2, ease: "easeInOut" }}>
                            <img src={text.advantages.icon.one} alt="icon"  className={styles.icon}/>
                            <Ptag font='regular' size='medium'>{text.advantages.advantage_1}</Ptag>
                        </motion.li>
                        <motion.li ref={twoRef}
    initial={{ opacity: 0, y: 300 }}
    animate={isInViewTwo ? { opacity: 1.2, y: 0 } : {}}
    transition={{ duration: 1, ease: "easeInOut" }}>
                            <img src={text.advantages.icon.two} alt="icon"  className={styles.icon}/>
                            <Ptag font='regular' size='medium'>{text.advantages.advantage_2}</Ptag>
                        </motion.li>
                        <motion.li ref={threeRef}
                        initial={{ opacity: 0, y: 300 }}
                        animate={isInViewThree ? { opacity: 1.2, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeInOut" }}>
                            <img src={text.advantages.icon.three} alt="icon"  className={styles.icon}/>
                            <Ptag font='regular' size='medium'>{text.advantages.advantage_3}</Ptag>
                        </motion.li>
                        <motion.li ref={fourRef}
                        initial={{ opacity: 0, y: 300 }}
                        animate={isInViewFour ? { opacity: 1.2, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeInOut" }}>
                            <img src={text.advantages.icon.four} alt="icon"  className={styles.icon}/>
                            <Ptag font='regular' size='medium'>{text.advantages.advantage_4}</Ptag>
                        </motion.li>
                    </ul>
                </div>
            </div>

        </div>
    )
}