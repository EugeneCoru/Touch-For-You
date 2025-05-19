'use client'
import { text } from "@/app/text"
import { Ptag } from "../../Ptag/ptag"
import styles from './why.module.scss'
import { Htag } from "../../Htag/htag"
import Image from "next/image"




export const Why = ()=>{
  

    return (
        <div className={styles.wrapper}>
            <Htag size="large" className={styles.title}>ПОЧЕМУ TOUCH FOR YOU?</Htag>
            <div className={styles.cont}>
            <div className={`${styles.cont_left} ${styles.content}`} >
                <div className={styles.cont_shadow} >
                <div className={styles.shadow_up}></div>
                <div className={styles.shadow_right}></div>
                <div className={styles.shadow_45}></div>
                <div className={styles.shadow_down}></div>
                <div className={styles.shadow_315}></div>
               
                <Image loading="lazy" quality={70} src="/why_one.webp" alt="image" className={styles.img_left} width={500} height={500} />
                </div>
                <div>
                <Ptag font='extra-light' size='large' className={styles.p_left}>{text.why.text_1}</Ptag>
                </div>
            </div>
            <div className={`${styles.cont_right} ${styles.content}`}>
                <div>
                <Ptag font='light' size='large' className={styles.p_right}>{text.why.text_2}</Ptag>
                </div>
                <div className={styles.cont_shadow} >
                <div className={styles.shadow_up_2}></div>
                <div className={styles.shadow_right_2}></div>
                <div className={styles.shadow_45_2}></div>
                <div className={styles.shadow_down_2}></div>
                <div className={styles.shadow_315_2}></div>
                <Image quality={70} loading="lazy" src="/why_two.webp" alt="image" className={styles.img_right} width={500} height={500} />
                </div>
                
            </div>
            </div>
        </div>
    )
}