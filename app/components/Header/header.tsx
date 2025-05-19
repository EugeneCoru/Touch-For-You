import styles from './header.module.scss'
import { Button } from '../Button/button'
import { Burger } from '../Burger/burger'
import { Nav } from '../Nav/nav'
import Image from 'next/image'
import Link from 'next/link'


export const Header = ()=>{
    return(
        <header className={styles.wrapper}>
            <Link href='/'><Image src="/logo.webp" alt="logo" width={100} height={100} className={styles.logo}/></Link>
         <div className={styles.adaptive}>
         <Nav /> 
         </div>  
        <Button font='medium' color='neon' className={styles.adaptive}  targ={false} link='/#randomizer'>ПОИГРАЕМ?</Button>

        
        <Burger color='white'/>
        </header>
    )
}