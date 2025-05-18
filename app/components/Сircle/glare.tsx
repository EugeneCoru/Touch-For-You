'use client'
import styles from './glare.module.scss'
import { GlareProps } from './glare.props'
import cn from 'classnames'

export const Glare = ({color, top, left, className}: GlareProps)=>{
  return(
    <div className={cn(styles.wrapper,className) } style={
     { background: color, top: top, left: left }
    }></div>
  )
}