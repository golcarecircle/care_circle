import { FC } from 'react';
import styles from './StatsCard.module.css';

interface StatsCardProps {
  patientsSeenThisWeek: number;
  completedAppointments: number;
  todaysAppointments: number;
}

const StatsCard: FC<StatsCardProps> = ({
  patientsSeenThisWeek,
  completedAppointments,
  todaysAppointments,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.stat}>
        <h3 className={styles.number}>{patientsSeenThisWeek}</h3>
        <p className={styles.label}>Walk In</p>
      </div>
      <div className={styles.stat}>
        <h3 className={styles.number}>{completedAppointments}</h3>
        <p className={styles.label}>seen this week</p>
      </div>
      <div className={styles.stat}>
        <h3 className={styles.number}>{todaysAppointments}</h3>
        <p className={styles.label}>Scheduled for Today</p>
      </div>
    </div>
  );
};

export default StatsCard;
