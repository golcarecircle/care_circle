import MedicalHistory from '@/pages/dashboard/components/medical_history/medicalhistory';
import { useSession } from 'next-auth/react';
import { FC } from 'react';
import styles from './medHistory.module.css';

interface MedHistoryProps {}

const MedHistory: FC<MedHistoryProps> = ({}) => {
  const{data: session} = useSession();
  const userId = session?.user?.id;
  return (
    <div className={styles.medical__history}>
      <div className={styles.medical__history__container}>
        <div className={styles.medical__history__header}>
          <h1>Medical History</h1>
        </div>
        <div className={styles.medical__history__body}>
          <MedicalHistory userid ={userId}/>
        </div>
      </div>
    </div>
  );
};

export default MedHistory;
