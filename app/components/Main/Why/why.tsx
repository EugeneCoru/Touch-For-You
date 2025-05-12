'use client'
import { text } from "@/app/text"
import { Ptag } from "../../Ptag/ptag"
import styles from './why.module.scss'
import { Htag } from "../../Htag/htag"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"




export const Why = ()=>{
    const containerRef = useRef(null);
    const containerRefTwo = useRef(null);
  const isInView = useInView(containerRef, {
    once: true, // Анимация сработает только один раз
    margin: "-50px", // Начало анимации при достижении 50px до элемента
  });
  const isInViewTwo = useInView(containerRefTwo, {
    once: true, // Анимация сработает только один раз
    margin: "-50px", // Начало анимации при достижении 50px до элемента
  });

    return (
        <div className={styles.wrapper} ref={containerRef}>
            <Htag size="large" className={styles.title}>ПОЧЕМУ TOUCH FOR YOU?</Htag>
            <div className={styles.cont}>
            <div className={`${styles.cont_left} ${styles.content}`} >
                <motion.div className={styles.cont_shadow} 
    initial={{ x: -100, opacity: 0 }}
    animate={isInView ? { x: 0, opacity: 1 } : {}}
    transition={{ duration: 1.4, delay: 0.2 }}>
                <div className={styles.shadow_up}></div>
                <div className={styles.shadow_right}></div>
                <div className={styles.shadow_45}></div>
                <div className={styles.shadow_down}></div>
                <div className={styles.shadow_315}></div>
                {/* <img src="why_one.png" alt="image" className={styles.img_left}/> */}
                <Image src="why_one.png" alt="image" className={styles.img_left} width={500} height={500} unoptimized/>
                </motion.div>
                <motion.div initial={{ x: 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.2 }}>
                <Ptag font='extra-light' size='large' className={styles.p_left}>{text.why.text_1}</Ptag>
                </motion.div>
            </div>
            <div className={`${styles.cont_right} ${styles.content}`} ref={containerRefTwo}>
                <motion.div initial={{ x: -100, opacity: 0 }}
                animate={isInViewTwo ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.2 }}>
                <Ptag font='regular' size='large' className={styles.p_right}>{text.why.text_2}</Ptag>
                </motion.div>
                <motion.div className={styles.cont_shadow} 
                initial={{ x: 100, opacity: 0 }}
                animate={isInViewTwo ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.2 }}>
                <div className={styles.shadow_up_2}></div>
                <div className={styles.shadow_right_2}></div>
                <div className={styles.shadow_45_2}></div>
                <div className={styles.shadow_down_2}></div>
                <div className={styles.shadow_315_2}></div>
                {/* <img src="why_two.png" alt="image" className={styles.img_right}/> */}
                <Image src="why_two.png" alt="image" className={styles.img_right} width={500} height={500} unoptimized/>
                </motion.div>
                
            </div>
            </div>
        </div>
    )
}