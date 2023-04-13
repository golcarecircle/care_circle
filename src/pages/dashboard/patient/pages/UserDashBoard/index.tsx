import { FC } from 'react';
import styles from './UserDashboard.module.css';
import ProfileCard from '../components/profile';
import DashboardMain from '../components/dashboardmain';

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
