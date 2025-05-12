import styles from './header.module.scss'
import { Button } from '../Button/button'
import { Burger } from '../Burger/burger'
import { Nav } from '../Nav/nav'



export const Header = ()=>{
    return(
        <header className={styles.wrapper}>
            {/* <a href="#"><img src="/file.svg" alt="logo" className={styles.logo}/>Touch For You</a> */}
            <a href="#">Touch For You</a>
         <div className={styles.adaptive}>
         <Nav /> 
         </div>  
        <Button font='medium' color='neon' className={styles.adaptive} link='#randomizer' targ={true} >ПОИГРАЕМ?</Button>
        
        <Burger color='white'/>
        </header>
    )
}