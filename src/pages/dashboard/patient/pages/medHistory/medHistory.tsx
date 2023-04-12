import MedicalHistory from '@/pages/dashboard/components/medicalhistory';
import { FC } from 'react';
import styles from './medHistory.module.css';

interface MedHistoryProps {}

const MedHistory: FC<MedHistoryProps> = ({}) => {
  return (
    <div className={styles.medical__history}>
      <div className={styles.medical__history__container}>
        <div className={styles.medical__history__header}>
          <h1>Medical History</h1>
        </div>
        <div className={styles.medical__history__body}>
          <MedicalHistory
            history={[
              {
                date: '2022-04-12',
                hospital: 'kenyatta',
                physcian: 'Dr. John Doe',
                physcianNotes: 'sdfuyaifh',
                tests: [
                  {
                    name: 'Blood Test',
                    result: 'Positive for mps',
                  },
                ],
                treatmentPlan: 'sdfuyaifh',
                diagnosis: {
                  description: 'Malaria',
                  startDate: '2022-04-12',
                  code: 'MPS',
                  prescription: [
                    {
                      medicine_name: 'Paracetamol',
                      dosage: '2 tablets',
                      frequency: 'twice a day',
                      duration: '2 weeks',
                    },
                  ],
                },
                treatmentStatus: 'Completed',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MedHistory;
