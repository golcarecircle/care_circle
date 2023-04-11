import Logo from '@/components/Logo'
import { FC, useState } from 'react'
import styles from './dashboard.module.css'
import { IoMdNotifications } from 'react-icons/io';
import { appointment, dashboard, logout, messages, profile, settings} from '@/assets/icons';
import UserDashboard from './pages/UserDashBoard';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

interface PatientProps {

}

const Patient: FC<PatientProps> = ({}) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleClick = (item: string) => {
    setActiveItem(item);
  }

  return <div className={styles.dashboard}>
    <div className={styles.dashboard__container}>
      <div className={styles.sidebar}>
        {sideBar(activeItem, handleClick)}
      </div>
      <div className={styles.main}>
        {dashboardNav()}
        <UserDashboard />
      </div>
    </div>
  </div>
}

export default Patient

function sideBar(activeItem: string, handleClick: (item: string) => void) {
  return <div className={styles.sidebar__container}>
    <div className={`${styles.sidebar__item} ${activeItem === 'dashboard' ? styles.active : ''}`} onClick={() => handleClick('dashboard')}>
      <div className={styles.sidebar__item__icon}>
        {dashboard()}
      </div>
    </div>
    <div className={`${styles.sidebar__item} ${activeItem === 'messages' ? styles.active : ''}`} onClick={() => handleClick('messages')}>
      <div className={styles.sidebar__item__icon}>
        {messages()}
      </div>
    </div>
    <div className={`${styles.sidebar__item} ${activeItem === 'appointment' ? styles.active : ''}`} onClick={() => handleClick('appointment')}>
      <div className={styles.sidebar__item__icon}>
        {appointment()}
      </div>
    </div>
    <div className={`${styles.sidebar__item} ${activeItem === 'settings' ? styles.active : ''}`} onClick={() => handleClick('settings')}>
      <div className={styles.sidebar__item__icon}>
        {settings()}
      </div>
    </div>
    <div className={`${styles.sidebar__item} ${activeItem === 'logout' ? styles.active : ''}`} onClick={() => handleClick('logout')}>
      <div className={styles.sidebar__item__icon}>
        {logout()}
      </div>
    </div>

  </div>;
}

function dashboardNav() {
  return <div className={styles.main__nav}>
    <div className={styles.main__nav__container}>
      <Logo size='small' />
      <div className={styles.main__nav__container__right}>
        <div className={styles.main__nav__container__right__search}>
          <input type="text" placeholder="Search" className={styles.searchInput} />

        </div>
        <div className={styles.main__nav__container__right__notification}>
          <div className={styles.main__nav__container__right__notification__icon}>
            <div className={styles.badge}>
              <p>2</p>
            </div>
            <IoMdNotifications />
          </div>
        </div>
        <div className={styles.main__nav__container__right__profile}>
          <div className={styles.main__nav__container__right__profile__avatar}>
            <img src="https://images.unsplash.com/photo-1680763921539-afae7b2c219e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1526&q=80" alt="avatar" />
          </div>
          <div className={styles.main__nav__container__right__profile__name}>
            <p>John Doe</p>
          </div>
        </div>
      </div>
    </div>

  </div>;
}
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