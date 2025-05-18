'use client'
import { Footer } from "@/app/components/Footer/footer";
import { Header } from "@/app/components/Header/header";
import { DataPoses } from "./data";

import Image from "next/image";
import { Htag } from "@/app/components/Htag/htag";
import { Ptag } from "@/app/components/Ptag/ptag";
import styles from "./poses.module.scss";
import { Glare } from "@/app/components/Сircle/glare";
import { PosesProps } from "./poses.props";
import { JSX } from "react";



export default function Poses({y}: PosesProps):JSX.Element {


  return (
   <> 
   <Header/>
    <div className={styles.wrapper}>
          {DataPoses && DataPoses.length > 0 ? (
              DataPoses.map(pose => <div key={pose.title}>
                <Htag size="large" className={styles.title}>{pose.title}</Htag>
                <div>{pose.variantPoses.map((variantPose, index) => <div key={variantPose.name} className={`${styles.variantPose} ${styles[`position_${index % 2 === 0 ? 'left' : 'right'}`]}`}>
                  <div className={styles.variantPoseContent}>
                  <Htag size="medium">{variantPose.name}</Htag>
                  <Ptag className={styles.description}>{variantPose.description}</Ptag>
                  </div>
                  <Image src={variantPose.img} width={500} height={500} alt={variantPose.name} className={styles.img}/>

                </div>)}</div>
                </div>)
          ) : (
              <div>Нет данных</div>
          )}

      <Glare color='' top='20%' left='20%' className={styles.glare}/>
      <Glare color='#C307A6' top='90%' left='80%' className={styles.glare}/>
      <Glare color='white' top='60%' left='50%' className={styles.glare}/>
      <Glare color='' top='80%' left='5%' className={styles.glare}/>
      <Glare color='#C307A6' top='20%' left='80%' className={styles.glare}/>
    </div>
    <Footer/>

      
    </>
  );

}