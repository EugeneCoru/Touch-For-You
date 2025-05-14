import styles from './header.module.scss'
import { Button } from '../Button/button'
import { Burger } from '../Burger/burger'
import { Nav } from '../Nav/nav'
import Image from 'next/image'


export const Header = ()=>{
    return(
        <header className={styles.wrapper}>
            {/* <a href="#"><img src="/file.svg" alt="logo" className={styles.logo}/>Touch For You</a> */}
            <a href="#main"><Image src="/logo.png" alt="logo" width={100} height={100} className={styles.logo}/></a>
         <div className={styles.adaptive}>
         <Nav /> 
         </div>  
        <Button font='medium' color='neon' className={styles.adaptive} link='#randomizer' targ={true} >ПОИГРАЕМ?</Button>
        
        <Burger color='white'/>
        </header>
    )
}