import {
  appointment,
  dashboard,
  logout,
  messages,
  settings,
} from '@/assets/icons';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './SideBar.module.css';

interface SideBarProps {
  activeItem: string;
  userType: string;
  signout: () => Promise<void>;
}

const SideBar: FC<SideBarProps> = ({ activeItem, userType, signout }) => {
  const router = useRouter();
  const patientItems = [
    {
      key: 'user-dashboard',
      label: 'Dashboard',
      icon: dashboard(),
      path: '/dashboard/patient'
    },
    {
      key: 'messages',
      label: 'Messages',
      icon: messages(),
      path: '/dashboard/patient/messages'
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: settings(),
      path: '/dashboard/patient/settings'
    },
  ];

  const doctorItems = [
    {
      key: 'doctor-dashboard',
      label: 'Dashboard',
      path: '/dashboard/doctor',
      icon: dashboard(),
    },
    {
      key: 'appointment-history',
      label: 'Appointment History',
      icon: appointment(),
      path: '/dashboard/doctor/appointment-history'
    },
    {
      key: 'messages',
      label: 'Messages',
      icon: messages(),
      path: '/dashboard/doctor/messages'
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: settings(),
      path: '/dashboard/doctor/settings'
    },
  ];
  const commonItems = [
    {
      key: 'logout',
      label: 'Logout',
      icon: logout(),
      path: '/'
    },
  ];

  const itemsToRender = userType === 'PATIENT' ? patientItems : doctorItems;

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        {itemsToRender.map((item) => {
          const isActive = router.asPath === item.path;
          return (
            <a
              key={item.path}
              className={`${styles.sidebar__item} ${isActive ? styles.active : ''}`}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                router.push(item.path);
              }}
            >
              <div className={styles.sidebar__item__icon}>{item.icon}</div>
              {/* <div className={styles.sidebar__item__label}>{item.label}</div> */}
            </a>
          );
        })}
        {commonItems.map((item) => (
          <a
            key={item.key}
            className={`${styles.sidebar__item} ${
              activeItem === item.key ? styles.active : ''
            }`}
            href={item.path}
            onClick={(e) => {
              e.preventDefault();
              signout();
            }}
          >
            <div className={styles.sidebar__item__icon}>{item.icon}</div>
            {/* <div className={styles.sidebar__item__label}>{item.label}</div> */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
