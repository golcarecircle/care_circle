import { FC } from 'react';
import styles from './Logo.module.css';
import { medIcon } from '@/assets/icons';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: FC<LogoProps> = ({ size = 'medium' }) => {
  let logoClasses = [styles.logo];
  if (size === 'small') {
    logoClasses.push(styles['logo--small']);
  } else if (size === 'large') {
    logoClasses.push(styles['logo--large']);
  }

  return (
    <div className={logoClasses.join(' ')}>
      {medIcon()}
      <h1 className={styles.brand}>CareCircle</h1>
    </div>
  );
};

export default Logo;
