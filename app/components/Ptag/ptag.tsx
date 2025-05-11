
import { JSX } from "react"
import styles from './ptag.module.scss'
import classNames from "classnames";
import { PtagProps } from "./ptag.props";






export const Ptag = ({children, size, font, className, ...props}: PtagProps): JSX.Element => {
    
        return(
            <p className={classNames(styles.ptag,className, {
                [styles.large]: size == 'large',
                [styles.medium]: size == 'medium',
                [styles.small]: size == 'small',
                
                [styles.medium]: font == 'medium',
                [styles.regular]: font == 'regular',
                [styles.light]: font == 'light',
                [styles.extra_light]: font == 'extra-light',
            })} {...props}>{children}</p>
        )

}
