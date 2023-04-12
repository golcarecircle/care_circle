import Logo from '@/components/Logo'
import { Session } from 'next-auth'
import { FC } from 'react'
import styles from './dashboardNav.module.css'
import { IoMdNotifications } from 'react-icons/io'

interface DashboardNavProps {
    session: Session | null
}

const DashboardNav: FC<DashboardNavProps> = ({session}) => {
  return session && <div className={styles.main__nav}>
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
          <p>{session.user?.email}</p>
        </div>
      </div>
    </div>
  </div>

</div>
}

export default DashboardNav