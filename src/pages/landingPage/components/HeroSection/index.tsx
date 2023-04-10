import { FC } from 'react'
import styles from './HeroSection.module.css'
import HealthMatter from '../HeathIcon'
import Button from '@/components/Btn'


interface HeroSectionProps {
  
}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return <section className={styles.section}>
    <div className={styles.bg}>
      <div></div>
      <div></div>
    </div>
    <div className={styles.container}>
        <HealthMatter />
        <h1 className={styles.title}>Join Care Circle </h1>
        <p className={styles.subtitle}>Take control of your health with cutting-edge technology at your fingertips.</p>
        <Button text='Join Us' onClick={ () => {}}/>
    </div>
  </section>
}

export default HeroSection