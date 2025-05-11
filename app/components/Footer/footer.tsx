import { Htag } from "../Htag/htag"
import { Ptag } from "../Ptag/ptag"
import styles from './footer.module.scss'


export const Footer = ()=>{
    return(
        <footer className={styles.wrapper}>
            <div className={styles.line}></div>           
            <p>© 2025 Vertex. Все права защищены<br />ИНН 5258150049 / ОГРН 1215200002456</p>
            <p className={styles.p}>Мы не используем cookies и не собираем персональные данные пользователей</p>
        </footer>
    )
}