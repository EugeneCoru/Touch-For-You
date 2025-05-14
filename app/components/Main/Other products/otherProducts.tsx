'use client'
import { text } from "@/app/text"
import { Button } from "../../Button/button"
import { Htag } from "../../Htag/htag"
import { Ptag } from "../../Ptag/ptag"
import styles from './otherProducts.module.scss'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"




export const OtherProducts = ()=>{
    const oneRef = useRef(null);


    const isInView = useInView(oneRef, {
        once: true, 
        margin: "50px 0px -10px 0px", 
        
            });
        
    return(
        <div className={styles.wrapper}>
            <div className={styles.title_cont}>
            <Htag size="large" >ДРУГАЯ ПРОДУКЦИЯ</Htag>
            <Ptag font='extra-light' size='small' className={styles.p}>Познакомьтесь с другими товарами бренда Touch for You</Ptag>
            </div>
            <motion.div className={styles.cont} ref={oneRef} 
            initial={{ opacity: 0, y: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}>
                <div className={styles.shadow_up}></div>
                <div className={styles.shadow_down}></div>
                <div className={`${styles.cont_content} ${styles.shamp}`}  >
                    <div className={styles.opacity}></div>
                    <Ptag font="regular" size="large" className={styles.cont_content_p}>ШАМПУНИ ДЛЯ ВОЛОС</Ptag>
                    <div className={styles.cont_content_btn}>
                    <Button color="blue" font="extra-light" target='_blank' link={text.otherProduct.shamp.oz}>OZON</Button>
                    <Button color="pink" font="extra-light" target='_blank' link={text.otherProduct.shamp.wb}>WB</Button>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={`${styles.cont_content} ${styles.gel}`}>
                    <div className={styles.opacity}></div>
                    <Ptag font="regular" size="large" className={styles.cont_content_p}>ГЕЛИ ДЛЯ ДУША</Ptag>
                    <div className={styles.cont_content_btn}>
                    <Button color="blue" font="extra-light" target='_blank' link={text.otherProduct.gel.oz}>OZON</Button>
                    <Button color="pink" font="extra-light" target='_blank' link={text.otherProduct.gel.wb}>WB</Button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}