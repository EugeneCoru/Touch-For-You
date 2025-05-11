/* eslint-disable @next/next/no-img-element */
'use client'
import { motion, useInView } from "framer-motion";

import { text } from "@/app/text"
import { Htag } from "../../Htag/htag"
import { Ptag } from "../../Ptag/ptag"
import { Button } from "../../Button/button"
import styles from "./product.module.scss"
import { LineNeon } from "../../Line/line"
import { useEffect, useRef } from "react"
import { Glare } from "../../Сircle/glare";




export const Products = () =>{
    const oneRef = useRef(null);
    const twoRef = useRef(null);
    
  
  // Настройка Intersection Observer
  const isInView = useInView(oneRef, {
    once: true, // Анимация сработает только один раз
    margin: "-10px 0px -10px 0px", // Регулирует зону срабатывания
    
  });
  const isInViewTwo = useInView(twoRef, {
    once: true, // Анимация сработает только один раз
    margin: "-10px 0px -10px 0px", // Регулирует зону срабатывания
    
  });

    return(
        <div className={styles.wrapper} id="products" >
            <Htag size="large" className={styles.title}>ПРОДУКЦИЯ</Htag>
            <div className={styles.container_products} >
            <LineNeon
                path="M 0 15 Q 20 100 60 40 T 1000 2200"
                duration={1}
                top="0"
                strokeWidth={0.1}
                glowIntensity={5}
            />



                {/* малина */}
                <motion.div className={styles.cont}  ref={oneRef}
    initial={{ opacity: 0, y: 300 }}
    animate={isInView ? { opacity: 1.5, y: 0 } : {}}
    transition={{ duration: 1, ease: "easeInOut" }}>
                    <img src="lubric_berry.png" alt="img" className={`${styles.cont_img_berry} ${styles.cont_img}`}/>
                    <div className={styles.cont_content}>
                        <Htag size="medium" className={styles.cont_title}>{text.products.berry.title}</Htag>
                        <Ptag size="medium" font="extra-light" className={styles.cont_desc}>{text.products.berry.description}</Ptag>
                        <div className={styles.cont_btn_container}>
                        <Button font="extra-light" color="blue" className={styles.cont_btn} target="_blank" link={text.products.berry.link.oz}>OZON</Button>
                        <Button font="extra-light" color="pink" target="_blank" link={text.products.berry.link.wb}>WB</Button>
                        </div>                     
                    </div>
                </motion.div>
                {/* классический */}
                <motion.div className={`${styles.cont} ${styles.cont_second}`} ref={twoRef}
    initial={{ opacity: 0, y: 300 }}
    animate={isInViewTwo ? { opacity: 1.5, y: 0 } : {}}
    transition={{ duration: 1, ease: "easeInOut" }}>
                    
                    <div className={`${styles.cont_content} ${styles.cont_content_padding}`}>
                        <Htag size="medium" className={styles.cont_title}>{text.products.classic.title}</Htag>
                        <Ptag size="medium" font='extra-light' className={styles.cont_desc}>{text.products.classic.description}</Ptag>
                        <div className={styles.cont_btn_container}>
                        <Button font="extra-light" color="blue" target="_blank" link={text.products.classic.link.oz}>OZON</Button>
                        <Button font="extra-light" color="pink" target="_blank" link={text.products.classic.link.wb}>WB</Button>
                        </div>                     
                    </div>
                    <img src="lubric_classic.png" alt="img" className={`${styles.cont_img_classic}`}/>
                </motion.div>
            </div>


            <Glare color='' top='10%' left='20%' />
                <Glare color='#C307A6' top='80%' left='80%' />
                <Glare color='white' top='60%' left='30%' />
                <Glare color='' top='90%' left='10%' />
                <Glare color='#C307A6' top='20%' left='80%' />
                <Glare color='#C307A6' top='40%' left='50%' />
        </div>
    )
}