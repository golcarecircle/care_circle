import { FC } from 'react'
import styles from './doctorDashboard.module.css'
import { useSession } from 'next-auth/react'
import TAppointments from '../components/TApointments/Appointments'
import { Appointment } from '@/util/types';

const newAppointment: Appointment = {
  id: "1",
  date: '12 dec 555',
  patient: {
    id: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "555-555-5555",
    address: "123 Main St",
    createdAt: "2023-04-15T00:00:00.000Z",
    updatedAt: "2023-04-15T00:00:00.000Z",
    medicalHistory: {
      id: "1",
      userId: "1",
      consultation: [],
      createdAt: "2023-04-15T00:00:00.000Z",
      updatedAt: "2023-04-15T00:00:00.000Z",
    },
    appointment: [],
  },
  doctor: {
    id: "1",
    name: "Dr. Jane Smith",
    email: "janesmith@example.com",
    phone: "555-555-5555",
    address: "456 Main St",
    createdAt: "2023-04-15T00:00:00.000Z",
    updatedAt: "2023-04-15T00:00:00.000Z",
    hospital: {
      id: "1",
      name: "General Hospital",
      address: "789 Main St",
      hospitalAdmin: {
        id: "1",
        name: "Hospital Admin",
        email: "admin@example.com",
        phone: "555-555-5555",
        address: "789 Main St",
        createdAt: "2023-04-15T00:00:00.000Z",
        updatedAt: "2023-04-15T00:00:00.000Z",
      },
      createdAt: "2023-04-15T00:00:00.000Z",
      updatedAt: "2023-04-15T00:00:00.000Z",
    },
  },
  symptoms: [
    {
      id: "1",
      descriprion: "Headache",
    },
  ],
  createdAt: "2023-04-15T00:00:00.000Z",
  updatedAt: "2023-04-15T00:00:00.000Z",
};


interface DoctorDashboardProps {
  
}

const DoctorDashboard: FC<DoctorDashboardProps> = ({}) => {
  const {data: session} = useSession()
  return <div className={styles.dashboard}>
    <h1>Welcome &nbsp;<span> Dr.{session?.user?.name}</span></h1>  
    <div className={styles.dasboard__container}>
      <div className={styles.dashboard__container__left}>
        <TAppointments appointments={[
          newAppointment,
        ]} />
      </div>
      <div className={styles.dashboard__container__right}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quo sint distinctio debitis corrupti itaque dicta voluptate magnam, fuga vitae modi repellendus cum hic, assumenda obcaecati. Vitae illo nisi libero.
      </div>
    </div>
  </div>
}

export default DoctorDashboard