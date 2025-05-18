'use client'
import { JSX, useEffect, useRef, useState} from 'react'
import styles from './nav.module.scss'
import { NavProps } from './nav.props'
import cn from 'classnames'
import { Button } from '../Button/button'
import Link from 'next/link'



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Nav = ({className, onStatusChange, ...props}: NavProps): JSX.Element => {
     const [isOpen, setIsOpen] = useState(false);
        const menuRef = useRef<HTMLDivElement>(null);
      
        useEffect(() => {
          const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
              setIsOpen(false);
            }
          };
      
          document.addEventListener('mousedown', handleClickOutside);
          return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);
      
        useEffect(() => {
          document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        }, [isOpen]);
    


    return(
        <nav className={cn(styles.nav,className)} {...props}>
                <Link href='/#main' className={styles.a}>главная</Link>
                <Link href='/#products' className={styles.a}>продукция</Link>
                <Link href='/poses' className={styles.a}>позы</Link>
                <Link href='/#contacts' className={styles.a}>контакты</Link>
              

            </nav>
    )
}