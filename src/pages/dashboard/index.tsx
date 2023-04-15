import { useSession} from 'next-auth/react';
import { FC } from 'react';
import AdminDashboard from './admin';
import DoctorDashboard from './doctor';
import UserDashboard from './patient/UserDashBoard';

interface session {
    user: {
        userType: string

    }
}

const Dashboard: FC = () => {

    const { data: session, status } = useSession();
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!session || !session.user) {
        return <div>Error: User not authenticated</div>;
    }

    const typesd = 'DOCTOR';

  const getUserComponent = () => {
    switch (typesd) {
      case 'ADMIN':
        return <AdminDashboard />;
      case 'DOCTOR':
        return <DoctorDashboard />;
      default:
        return <UserDashboard />;
    }
  };

  return <div>{getUserComponent()}</div>;
};

export default Dashboard;
  