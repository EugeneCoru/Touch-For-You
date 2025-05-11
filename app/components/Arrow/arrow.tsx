
import styles from './arrow.module.scss'
import cn from 'classnames'

export const Arrow = ({className, ...props})=>{
    return(
        <div className={styles.wrapper}>
            <a href="#products"><img src="arrow.png" alt="arrow" className={cn(className,styles.arroww)}/></a>
        </div>
    )
}