/* eslint-disable @next/next/no-img-element */
//import Image from "next/image";
import { Header } from "./components/Header/header";
import { Htag } from "./components/Htag/htag";
import { Products } from "./components/Main/Products/products";
import { Ptag } from "./components/Ptag/ptag";
import { LineNeon } from "./components/Line/line";
import styles from "./page.module.css";
import { Main } from "./components/Main/main";
import { Video } from "./components/Main/Major_Video/video";
import {  GlowingBackground } from "./components/Сircle/glare";
import { MouseTrail } from "./components/Trail/trail";
import { Footer } from "./components/Footer/footer";
import { RandomFlicker } from "./components/RandomFlicker/randomFlicker";


export default function Home() {
  return(
    <div className={styles.header}>
    <Header/>
    <Video/>
    <Main/>
    <Footer/>
    

    {/* <GlowingBackground color="#49DAF5" size={500} speed={15} opacity={0.2} blur={1} zIndex={-1}/>     */}
    
    </div>
  )
}
