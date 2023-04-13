import Button from '@/components/Btn';
import { FC } from 'react';
import styles from './medication_card.module.css';

interface MedicationCardProps {}

const MedicationCard: FC<MedicationCardProps> = ({}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <h4>Treatment Plan</h4>
        <div className={styles.treatment__status}>
          <p>In progress</p>
        </div>
      </div>
      <hr />
      <div className={styles.card__body}>
        <div className={styles.medication__details}>
          <h5>Medication Details</h5>
          <ul>
            <li>
              <span>Prescribed by :</span> <a href="/f">Dr. James kimani</a>
            </li>
            <li>
              <span>Prescribed on :</span> 12/12/2020
            </li>
            <li>
              <span>Expires on :</span> 12/12/2021
            </li>
            <Button size="sm" text={'more'} onClick={() => {}} />
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
  );
};

export default MedicationCard;
