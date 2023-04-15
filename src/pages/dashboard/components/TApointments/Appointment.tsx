import { Appointment } from '@/util/types'
import { FC } from 'react'
import style from './appointments.module.css'

interface TAppointmentProps {
  appointment: Appointment
}

const TAppointment: FC<TAppointmentProps> = ({appointment}) => {
  return <div className={style.appointment}>
    <div className={style.appointment_profile_pic}>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile pic" />
    </div>
    <div className={style.appointment_info}>
        <div className={style.appointment_info_name}>
            {appointment.patient.name}
        </div>
        <div className={style.appointment_info_date}>
            {appointment.date}
        </div>
    </div>
  </div>
}

export default TAppointment