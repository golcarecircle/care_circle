import { FC } from 'react'
import styles from './UserDashboard.module.css'

interface UserDashboardProps {
  
}

const UserDashboard: FC<UserDashboardProps> = ({}) => {
  return <div className={styles.dashboard}>
    <div className={styles.dashboard__container}>
      <div className={styles.profile__card}>
        <div className={styles.ptofile__card__container}>
          <div className={styles.profile__image}>
            <img src="https://th.bing.com/th/id/OIP.gxCrcJ9wcnuS-hppF4l8ggHaHa?w=163&h=180&c=7&r=0&o=5&pid=1.7" alt="profile" />
          </div>
          <div className={styles.ptofile__card__container__name}>
            <p>John Doe</p>
          </div>
          <div className={styles.ptofile__card__container__email}>
            <p>
              <a href="mailto:mike@gmail.com" >M@mail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default UserDashboard