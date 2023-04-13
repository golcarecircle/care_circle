import { FC } from 'react';
import { GoLocation } from 'react-icons/go';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {}

const ProfileCard: FC<ProfileCardProps> = ({}) => {
  return (
    <div className={styles.profile__card}>
      <div className={styles.ptofile__card__container}>
        <div className={styles.profile__image}>
          <img
            src="https://th.bing.com/th/id/OIP.gxCrcJ9wcnuS-hppF4l8ggHaHa?w=163&h=180&c=7&r=0&o=5&pid=1.7"
            alt="profile"
          />
        </div>
        <div className={styles.profile__name}>
          <p>John Doe</p>
        </div>
        <div className={styles.location}>
          <GoLocation />
          <p>Nairobi</p>
        </div>
        <div className={styles.profile__details}>
          <div className={styles.profile__details__container}>
            <div className={styles.profile__details__item}>
              <ul>
                <li>
                  {' '}
                  <span>Email:</span> john.doe@example.com
                </li>
                <li>
                  <span>Phone:</span> +1 123 456 7890
                </li>
                <li>
                  <span>Emergency Tel:</span> +254 796 123 456
                </li>
              </ul>
            </div>
            <div className={styles.profile__details__item}>
              <ul>
                <li>
                  {' '}
                  <span>Sex:</span> male
                </li>
                <li>
                  <span>Blood Type:</span> o+
                </li>
                <li>
                  <span>height:</span> 55.5{' '}
                </li>
                <li>
                  <span>Age:</span> 55{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
