import { FC, useState } from 'react'
import styles from './dashboard.module.css'

import UserDashboard from './pages/UserDashBoard';
import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';
import SideBar from './pages/UserDashBoard/components/sideBar/sideBar';
import DashboardNav from './pages/UserDashBoard/components/nav/dashboardNav';
import MedHistory from './pages/medHistory/medHistory';
import Settings from './pages/settings/settings';

interface PatientProps {

}

const Patient: FC<PatientProps> = ({}) => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const {data: session} = useSession();
  console.log(session)
  const handleClick = (item: string) => {
    setActiveItem(item);
  }

  return <div className={styles.dashboard}>
    <div className={styles.dashboard__container}>
      <SideBar handleClick={handleClick} activeItem={activeItem} />
      <div className={styles.main}>
        <DashboardNav session={session} />
        {activeItem === 'dashboard' && <UserDashboard />}
        {activeItem === 'history' && <MedHistory />}
        {activeItem === 'settings' && <Settings />}
      </div>
    </div>
  </div>
}

export default Patient

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}