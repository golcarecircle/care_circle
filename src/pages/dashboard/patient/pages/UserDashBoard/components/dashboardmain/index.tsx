import { dashboard } from '@/assets/icons'
import { FC } from 'react'
import styles from './dashboardmain.module.css'

interface DashboardMainProps {
  
}

const DashboardMain: FC<DashboardMainProps> = ({}) => {
  return <div className={styles.dashboard__main}>
  <div className={styles.dashboard__main__container}>
    <div className={styles.dashboard__main__item}>
        <div className={styles.card}>
            <div className={styles.card__header}>
                <h4>Treatment Plan</h4>
                <div className={styles.treatment__status}>
                    <p>In progress</p>
                </div>
            </div>
            <div className={styles.card__body}>
                <div className={styles.treatment__details}>
                    <h5>Medications:</h5>
                    <ul>
                        <li>Aspirin 81mg daily</li>
                        <li>Metoprolol 25mg twice daily</li>
                        <li>Lisinopril 10mg daily</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className={styles.dashboard__main__item}></div>
</div>
}

export default DashboardMain