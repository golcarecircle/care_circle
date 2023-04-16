import { FC } from 'react';
import { Patient } from '@/util/types';
import styles from './MyPatients.module.css';

interface MyPatientsProps {
  patients: Patient[];
}

const MyPatients: FC<MyPatientsProps> = ({ patients }) => {
  return (
    <div className={styles.my_patients}>
        <div className={styles.header}>
            <h1>My Patients</h1>
            <a href='' className={styles.see_all}>See All Patients</a>
        </div>
      <div className={styles.patient_list}>
        {patients.map((patient) => (
          <div key={patient.id} className={styles.patient}>
            <div className={styles.profile_pic}>
                <img src={patient.profilePic} alt={patient.name} />
            </div>
            <div className={styles.patient_details}>
              <h3>{patient.name}</h3>
              <p>{patient.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPatients;
