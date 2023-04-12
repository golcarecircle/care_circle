import { FC } from 'react';
import styles from './UserDashboard.module.css';
import ProfileCard from './components/profile';
import DashboardMain from './components/dashboardmain';

interface UserDashboardProps {}

const UserDashboard: FC<UserDashboardProps> = ({}) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__container}>
        <ProfileCard />
        <DashboardMain />
      </div>
    </div>
  );
};

export default UserDashboard;
