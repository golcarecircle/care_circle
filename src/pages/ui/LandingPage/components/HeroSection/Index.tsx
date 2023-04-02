import { FC } from 'react'
import styles from './HeroSection.module.css'
import {heartIcon} from '@/assets/icons'


interface HeroSectionProps {
  
}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return <section className={styles.section}>
    <div className={styles.container}>
        {heartIcon()}
        <h1 className={styles.title}>Join Care Circle </h1>
        <p className={styles.subtitle}>Take control of your health with cutting-edge technology at your fingertips.</p>
    </div>
  </section>
}

export default HeroSection