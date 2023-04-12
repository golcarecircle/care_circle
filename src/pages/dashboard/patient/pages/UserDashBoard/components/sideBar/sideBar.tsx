import {
  appointment,
  dashboard,
  logout,
  messages,
  settings,
} from '@/assets/icons';
import { FC } from 'react';
import styles from './SideBar.module.css';

interface SideBarProps {
  activeItem: string;
  handleClick: (item: string) => void;
}

const SideBar: FC<SideBarProps> = ({ activeItem, handleClick }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        <div
          className={`${styles.sidebar__item} ${
            activeItem === 'dashboard' ? styles.active : ''
          }`}
          onClick={() => handleClick('dashboard')}
        >
          <div className={styles.sidebar__item__icon}>{dashboard()}</div>
        </div>
        <div
          className={`${styles.sidebar__item} ${
            activeItem === 'messages' ? styles.active : ''
          }`}
          onClick={() => handleClick('messages')}
        >
          <div className={styles.sidebar__item__icon}>{messages()}</div>
        </div>
        <div
          className={`${styles.sidebar__item} ${
            activeItem === 'history' ? styles.active : ''
          }`}
          onClick={() => handleClick('history')}
        >
          <div className={styles.sidebar__item__icon}>{appointment()}</div>
        </div>
        <div
          className={`${styles.sidebar__item} ${
            activeItem === 'settings' ? styles.active : ''
          }`}
          onClick={() => handleClick('settings')}
        >
          <div className={styles.sidebar__item__icon}>{settings()}</div>
        </div>
        <div
          className={`${styles.sidebar__item} ${
            activeItem === 'logout' ? styles.active : ''
          }`}
          onClick={() => handleClick('logout')}
        >
          <div className={styles.sidebar__item__icon}>{logout()}</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
