import { dashboard } from '@/assets/icons'
import Button from '@/components/Btn'
import { FC, MouseEvent } from 'react'
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
                <div className={styles.medication__detaials}>
                    <h5>Medication Details</h5>
                    <ul>
                        <li><span>Prescribed by :</span> <a href="/f">Dr. James kimani</a></li>
                        <li><span>Prescribed on :</span> 12/12/2020</li>
                        <li><span>Expires on :</span> 12/12/2021</li>
                        <Button size='sm' text={'more'} onClick={() => {}} />
                    </ul>
                </div>
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
    <div className={styles.dashboard__main__item}>
        <div className={styles.card}>
            <div className={styles.card__header}>
                <h4>My Appointments</h4>
                <Button text={'schudule'} onClick={() => {} } />
            </div>
            <div className={styles.card__body}>
                <div className={styles.appointment__details}>
                    <h5>Upcoming Appointments</h5>
                    <ul>
                        <li>
                            <div className={styles.appointment__details__item}>
                                <div className={styles.appointment__details__item__icon}>
                                </div>
                                <div className={styles.appointment__details__item__details}>
                                    <h6>Dr. James kimani</h6>
                                    <p>12/12/2020</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.appointment__details__item}>
                                <div className={styles.appointment__details__item__icon}>
                                </div>
                                <div className={styles.appointment__details__item__details}>
                                    <h6>Dr. James kimani</h6>
                                    <p>12/12/2020</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.appointment__details}>
                    <h5>Past Appointments</h5>
                    <ul>
                        <li>
                            <div className={styles.appointment__details__item}>
                                <div className={styles.appointment__details__item__icon}>
                                </div>
                                <div className={styles.appointment__details__item__details}>
                                    <h6>Dr. James kimani</h6>
                                    <p>12/12/2020</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
}

export default DashboardMain