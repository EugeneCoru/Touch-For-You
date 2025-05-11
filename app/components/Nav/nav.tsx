'use client'
import { JSX, useState } from 'react'
import styles from './nav.module.scss'
import { NavProps } from './nav.props'
import cn from 'classnames'
import { Button } from '../Button/button'



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Nav = ({className, onStatusChange, ...props}: NavProps): JSX.Element => {
    
    


    return(
        <nav className={cn(styles.nav,className)} {...props}>
                <a href="#main" className={styles.a}>главная</a>
                <a href="#products" className={`${styles.a}`} >продукция</a>
                {/* <a href="#blog" className={styles.a}>блог</a> */}
                <a href="#contacts" className={styles.a}>контакты</a>
                <Button font='medium' color='neon' className={styles.btn} link='#randomizer' targ={true} >ПОИГРАЕМ?</Button>

            </nav>
    )
}