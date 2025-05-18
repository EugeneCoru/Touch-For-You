import { Header } from "./components/Header/header";
import styles from "./page.module.css";
import { Main } from "./components/Main/main";
import { Video } from "./components/Main/Major_Video/video";
import { Footer } from "./components/Footer/footer";
import Link from "next/link";



export default function Home() {
  return(
    <div className={styles.header}>
    <Header/>
    <Video/>
    <Main/>
    <Footer/>
    <Link href="/poses"><button> Перейти</button></Link>
    </div>
  )
}
