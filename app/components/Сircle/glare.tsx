'use client'
import styles from './glare.module.scss'
import { GlareProps } from './glare.props'

export const Glare = ({color, top, left}: GlareProps)=>{
  return(
    <div className={styles.wrapper} style={
     { background: color, top: top, left: left }
    }></div>
  )
}