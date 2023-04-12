import MedicalHistory from '@/pages/dashboard/components/medicalhistory'
import { FC } from 'react'
import styles from './medHistory.module.css'

interface MedHistoryProps {
  
}

const MedHistory: FC<MedHistoryProps> = ({}) => {
  return <div className={styles.medical__history}>
    <div className={styles.medical__history__container}>
        <div className={styles.medical__history__header}>
            <h1>Medical History</h1>
        </div>
        <div className={styles.medical__history__body}>
            <MedicalHistory 
            history={[
                {
                    date: '2022-04-12',
                    chiefComplaint: 'Headache',
                    diagnosis: {
                      description: 'Migraine with aura',
                      prescription: 'Sumatriptan 100mg',
                    },
                  },
                  {
                    date: '2022-05-15',
                    chiefComplaint: 'Stomach pain',
                    diagnosis: {
                      description: 'Gastritis',
                      prescription: 'Omeprazole 20mg',
                    },
                  },
            ]} 
            />
        </div>
    </div>
  </div>
}

export default MedHistory