
import styles from './arrow.module.scss'
import cn from 'classnames'
import Image from 'next/image';
import { ArrowProps } from './arrow.props';
import { JSX } from 'react';


export const Arrow = ({className}: ArrowProps): JSX.Element =>{
    return(
        <div className={styles.wrapper}>
            {/* <a href="#products"><img src="arrow.png" alt="arrow" className={cn(className,styles.arroww)}/></a> */}
            <Image src="arrow.png" alt='arrow' className={cn(className,styles.arroww)}/>
        </div>
    )
}