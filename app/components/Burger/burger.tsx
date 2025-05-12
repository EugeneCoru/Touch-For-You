'use client'
import { JSX, useEffect, useRef, useState } from 'react';
import styles from './burger.module.scss';
import { BurgerButtonProps } from './burger.props';
import { Button } from '../Button/button';




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
                <a href="#main" className={styles.a} onClick={() => setIsOpen(false)}>главная</a>
                <a href="#products" className={`${styles.a}`} onClick={() => setIsOpen(false)}>продукция</a>
                {/* <a href="#blog" className={styles.a} onClick={() => setIsOpen(false)}>блог</a> */}
                <a href="#contacts" className={styles.a} onClick={() => setIsOpen(false)}>контакты</a>
                <Button font='medium' color='neon' className={styles.btn} link='#randomizer' targ={true} onClick={() => setIsOpen(false)}>ПОИГРАЕМ?</Button>

            </nav>
          </div>
        </div>
      </div>
    );
  };
  