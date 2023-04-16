import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getSession, signOut, useSession } from 'next-auth/react';
import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DashboardNav from '../components/nav/dashboardNav';
import SideBar from '../components/sideBar/sideBar';
import styles from './dashboardLayout.module.css';
import { wrapper } from '@/redux';
import { getUserById } from '@/pages/api/controllers/user.controller';
import { setUserInfo } from '@/redux/patientInfoSlice';
type Props = {
  children: React.ReactNode;
};

const DashboardLayout: FC<Props> = ({ children}) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      return;
    }
    if (status === 'loading') {
      return;
    }
    router.push('/auth');
  }, [status, router]);

  const handleLogout = async () => {
    await signOut();
    router.push('/auth');
  };
  return (
    <div className={styles.dashboard}>
      <SideBar
        activeItem={'dashboard'}
        userType={'PATIENT'} 
        signout={handleLogout }      
      />
      <div className={styles.dashboard__main}>
        <DashboardNav session={session} />
          {status == 'loading' ?
            <div className={styles.loading}></div> :
            <div className={styles.dashboard__main__content}>{children}</div>
          }
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store)=>async(context: GetServerSidePropsContext)=>{
    const session = await getSession(context);
    if (!session) {
      return {
        redirect: {
          destination: '/auth',
          permanent: false,
        },
      };
    }
    const user = getUserById(session?.user?.id||'');
    await store.dispatch(setUserInfo(user))
    if (!user) {
      return {
        redirect: {
          destination: '/auth',
          permanent: false,
        },
      };
    }
    return { props: { session } };
}
);

export default DashboardLayout;
