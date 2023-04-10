import { FC } from 'react'
import {heartIcon} from '@/assets/icons'
import styles from './HealthMatter.module.css'


interface HealthMatterProps {
  
}

const HealthMatter: FC<HealthMatterProps> = ({}) => {
  return <div className={styles.container}>
    <h1>Health Matters</h1>
    {heartIcon()}
  </div>
}

export default HealthMatter