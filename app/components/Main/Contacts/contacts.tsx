import { text } from "@/app/text"
import { Htag } from "../../Htag/htag"
import styles from './contacts.module.scss'
import { Ptag } from "../../Ptag/ptag"
import Image from "next/image"


export const Contacts = ()=>{
    
    return(
       <div className={styles.wrapper}>
        <Htag size='large'>КОНТАКТЫ</Htag>
        <div className={styles.cont}>
            <div className={styles.cont_content}>

                <ul>
                    <li><b>Телефон:</b> <a href={`tel:${text.contacts.phone}`} className={styles.cont_content_a}>{text.contacts.phone}</a></li>
                    <li><b>Почта:</b> <a href={`mailto:${text.contacts.email}`} className={styles.cont_content_a}>{text.contacts.email}</a></li>
                    <li><b>Адрес:</b> {text.contacts.adress}</li>
                    <li><b>Режим работы:</b> {text.contacts.work}</li>
                </ul>
            </div>
            <div className={styles.cont_link}>
                <Ptag className={styles.subtitle} size='medium' font='medium'>Товары компании VERTEX</Ptag>
                <div className={styles.cont_link_qr}>
                <a href={text.contacts.link} target="_blank" className={styles.cont_link_qr_text}>Официальный сайт</a>
                {/* <img src={text.contacts.image} alt="qr-code" /> */}
                <a href={text.contacts.link} target="_blank">
                    <Image src="https://qrcoder.ru/code/?https%3A%2F%2Fvertex-pro.ru&4&0" width="132" height="132" alt="QR код" unoptimized/>
                    {/* <img src="http://qrcoder.ru/code/?https%3A%2F%2Fvertex-pro.ru&4&0" width="132" height="132" border="0" title="QR код"/> */}
                </a>
                </div>
            </div>
        </div>
</div>
    )
}