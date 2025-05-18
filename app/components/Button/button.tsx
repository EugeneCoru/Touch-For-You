
import { ButtonProps } from "./button.props"
import classNames from 'classnames';
import styles from './button.module.scss'
import Link from "next/link";
import { JSX } from "react";
//import { Link } from 'react-scroll';



export const Button = ({children, font, color, link,targ=true, className,  ...props }: ButtonProps): JSX.Element | undefined =>{

    // Для внутренних маршрутов (React Router)
  if (link && targ==false) {
    console.log("no zaebis");
    
    return (
      <Link
       href={link}
        className={classNames(styles.button,className, {
            [styles.medium]: font === 'medium',
            [styles.extra_light]: font === 'extra-light',
            [styles.pink]: color === 'pink',
            [styles.blue]: color === 'blue',
            [styles.neon]: color === 'neon',
        })}
        target="_parent"
        >
        {children}
      </Link>
    );
  }

  // Для внешних ссылок
  if (link && targ) {
    return (
      <>
      <a
        href={link}
        className={classNames(styles.button,className, {
          [styles.medium]: font === 'medium',
          [styles.extra_light]: font === 'extra-light',
            [styles.pink]: color === 'pink',
            [styles.blue]: color === 'blue',
            [styles.neon]: color === 'neon',
        })}
        {...props}
        target="_blank"
        
        role="button"
      >
        {children}
      </a>
      </>
    );
    
  }

  
}

{/* <button className={classNames(styles.button,className, {
            [styles.medium]: font === 'medium',
            [styles.medium]: font === 'extra-light',
            [styles.pink]: color === 'pink',
            [styles.blue]: color === 'blue',
            [styles.neon]: color === 'neon',
        })}
        {...props}>
            {children}
        </button> */}