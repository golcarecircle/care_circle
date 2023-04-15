import Button from '@/components/Btn';
import { FC } from 'react';
import Appointment from '../appointment/appointment';
import MedicationCard from '../medication_card';
import styles from './dashboardmain.module.css';

interface DashboardMainProps {}

const DashboardMain: FC<DashboardMainProps> = ({}) => {
  return (
    <div className={styles.dashboard__main}>
      <MedicationCard />
      <Appointment />
    </div>
  );
};

export default DashboardMain;
