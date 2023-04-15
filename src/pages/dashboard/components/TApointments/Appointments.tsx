import { Appointment } from '@/util/types'
import { FC } from 'react'
import TAppointment from './Appointment'
import styles from  './appointments.module.css'

interface AppointmentsProps {
  appointments: Appointment[]
}

const Appointments: FC<AppointmentsProps> = ({appointments}) => {
  return (
    <div className={styles.appointments}>
        {
            appointments.map((appointment, index) => 
                <TAppointment key={index} appointment={appointment} />
            )
        }
    </div>

  )
}

export default Appointments