import DashboardMain from '@/pages/dashboard/components/dashboardmain';
import ProfileCard from '@/pages/dashboard/components/profile';
import { FC } from 'react';
import styles from './UserDashboard.module.css';


interface UserDashboardProps {}

const UserDashboard: FC<UserDashboardProps> = ({}) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__container}>
        <div className={styles.dashboard__container__left }>

          <ProfileCard />
        </div>

        <div className={styles.dashboard__container__right }>
          <DashboardMain />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
