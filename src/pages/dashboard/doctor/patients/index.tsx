import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Patient } from '@/util/types';
import styles from './MyPatients.module.css';
import { mockpatients } from './mockdata'

interface MyPatientsProps {
  patients: Patient[];
}

const MyPatients: FC<MyPatientsProps> = ({ patients }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Patients</h2>
      <ul className={styles.patients__list}>
        {mockpatients.map((patient) => (
          <li key={patient.id} className={styles.patient__list__item}>
            <Link href={`/dashboard/patient/${patient.id}`}>
              <div className={styles.name}>
                
              </div>
              <div className={styles.img}>
                <img src={patient.profilePic} alt={patient.profilePic}  />
              </div>
              <h5>{patient.name}</h5>
              <p className={styles.gender}>
                {patient.gender}
              </p>
              <p className={styles.email}>
                {patient.email}
              </p>
              <p className={styles.phone}>
                {patient.phone}
              </p>

            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPatients;
