import { Header } from "./components/Header/header";
import styles from "./page.module.css";
import { Main } from "./components/Main/main";
import { Video } from "./components/Main/Major_Video/video";
import { Footer } from "./components/Footer/footer";



export default function Home() {
  return(
    <div className={styles.header}>
    <Header/>
    <Video/>
    <Main/>
    <Footer/>
    </div>
  )
}
