'use client'
import { JSX, lazy, useEffect, useRef, useState } from 'react';
import styles from './burger.module.scss';
import { BurgerButtonProps } from './burger.props';
import { Button } from '../Button/button';
import Link from 'next/link';




export const Burger = ({ 
    color = '#333', 
    size = 40,
    
  }: BurgerButtonProps): JSX.Element => {
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


 
  
    return (
      <div className={styles.wrapper} ref={menuRef}>
        <div 
          className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            '--burger-size': `${size}px`,
            '--burger-color': color 
          } as React.CSSProperties}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
  
        <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
          <div className={styles.menuContent}>
          <nav className={styles.nav} >
                
                <Link href='/#main' className={styles.a} onClick={() => setIsOpen(false)}>главная</Link>
                <Link href='/#products' className={styles.a} onClick={() => setIsOpen(false)}>продукция</Link>
                <Link href='/poses' className={styles.a} onClick={() => setIsOpen(false)}>позы</Link>
                <Link href='/#contacts' className={styles.a} onClick={() => setIsOpen(false)}>контакты</Link>
                {/* <Link href='/#randomizer' className={styles.btn} onClick={() => setIsOpen(false)} >ПОИГРАЕМ?</Link> */}
                <Button font='medium' color='neon' className={styles.adaptive}  targ={false} link='/#randomizer' onClick={() => setIsOpen(false)}>ПОИГРАЕМ?</Button>

            </nav>
          </div>
        </div>
      </div>
    );
  };
  