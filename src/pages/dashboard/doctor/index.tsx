import { FC } from 'react';
import styles from './doctorDashboard.module.css';
import { useSession } from 'next-auth/react';
import { Appointment, Patient } from '@/util/types';
import DoctorsUpcomingAppointments from '../components/DoctorsUpcomingAppointment';
import CustomCalendar from '../components/calendar';
import DailyMedicalReading from '../components/daily_reads';
import MyPatients from '../components/myPatients';
import StatsCard from '../components/statscard';

const mockAppointment = {
  id: '1',
  doctorId: 'doc-123',
  patientId: 'pat-123',
  patientName: 'John Doe',
  date: '2023-04-18T09:00:00.000Z',
  type: 'checkup',
  notes: 'Lorem ipsum dolor sit amet',
};

const mockPatients = [
  {
    id: 'p-1',
    name: 'John Doe',
    profilePic: 'https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    age: 32,
    gender: 'Male',
    phone: '+1 (555) 123-4567',
    email: 'johndoe@example.com',
    address: '123 Main St, Anytown USA',
    notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis convallis sapien, vel tristique purus. Nam scelerisque mauris sit amet libero lacinia, a lacinia nunc varius. Nulla facilisi. Mauris ac ultrices nisi.',
  },
  {
    id: 'p-2',
    name: 'Jane Smith',
    profilePic: 'https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    age: 45,
    gender: 'Female',
    phone: '+1 (555) 987-6543',
    email: 'janesmith@example.com',
    address: '456 Oak St, Anytown USA',
    notes: 'Phasellus at eleifend est. Curabitur malesuada, nibh vel feugiat ullamcorper, velit tortor laoreet elit, at aliquam elit elit vel turpis. Praesent tristique semper leo eu ullamcorper.',
  },
  {
    id: 'p-3',
    name: 'Bob Johnson',
    profilePic: 'https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    age: 57,
    gender: 'Male',
    phone: '+1 (555) 555-1212',
    email: 'bjohnson@example.com',
    address: '789 Elm St, Anytown USA',
    notes: 'Donec auctor imperdiet odio, eu pulvinar quam rhoncus non. Suspendisse at lorem ut felis sodales finibus. Sed cursus nisi ut orci semper, ac aliquet est consectetur.',
  },
];


interface DoctorDashboardProps {
  doctorId: string;
  appointments: Appointment[];
  patients: Patient[]
}

const DoctorDashboard: FC<DoctorDashboardProps> = ({
  doctorId,
  appointments,
}) => {
  const { data: session } = useSession();
  return (
    <div className={styles.dashboard}>
      <h1>
        Welcome &nbsp;<span> Dr.{session?.user?.name}</span>
      </h1>
      <div className={styles.dasboard__container}>
        <div className={styles.dashboard__container__left}>
          <DoctorsUpcomingAppointments
            doctorId={'doc-123'}
            appointments={[mockAppointment]}
          />
          <div className={styles.dashboard__container__left__content}>
            <CustomCalendar />
            <DailyMedicalReading />
          </div>
        </div>
        <div className={styles.dashboard__container__right}>
          <MyPatients patients={mockPatients} />
          <div className={styles.dashboard__container__right__content}>
            <StatsCard patientsSeenThisWeek={5} completedAppointments={5} todaysAppointments={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
