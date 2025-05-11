
import { JSX } from "react"
import { ButtonProps } from "./button.props"
import classNames from 'classnames';
import styles from './button.module.scss'
import { text } from "@/app/text";
import Link from "next/link";
//import { Link } from 'react-scroll';



export const Button = ({children, font, color, link,targ=true, target='_parent', className, ...props }: ButtonProps):JSX.Element =>{

    // Для внутренних маршрутов (React Router)
  if (link && !targ) {
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
        
        role="button"
        
      >
        {children}
      </Link>
    );
  }

  // Для внешних ссылок
  if (link && targ) {
    return (
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
        target={target}
        
        role="button"
      >
        {children}
      </a>
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