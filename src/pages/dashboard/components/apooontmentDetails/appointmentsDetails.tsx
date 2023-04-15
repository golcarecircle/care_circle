import { FC } from 'react'
import styles from './appointmentDetails.module.css'

interface Doctor {
    name: string
    phone: string
    email: string
    img_profile: string
}

interface Appointment {
    type: string
    date: string
    time: string
    status: string
    reason: string
    doctor: Doctor
}

interface AppointmentDetailsProps {
    appointment: Appointment
}

const AppointmentDetails: FC<AppointmentDetailsProps> = ({appointment}) => {
  return <div className={styles.appointmentDet}>
    <div className={styles.appointmentDet__header}>
        <h4>Appointment Details</h4>
    </div>
    <div className={styles.appointmentDet__body}>
        <div className={styles.appointment__doctor}>
            <div className={styles.appointment__doctor__img}>
                <img src={appointment.doctor.img_profile} alt="doctor" />
            </div>
            <div className={styles.appointment__doctor__contact}>

                <h5>{appointment.doctor.name}</h5>
                <ul>
                    <li>
                        <span>Phone:</span>
                        {appointment.doctor.phone}
                    </li>
                    <li>
                        <span>Email:</span>
                        {appointment.doctor.email}
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.appointment__details}>
            <ul>
                <li>
                    <span>Type:</span>
                    {appointment.type}
                </li>
                <li>
                    <span>Date:</span>
                    {appointment.date}
                </li>
                <li>
                    <span>Time:</span>
                    {appointment.time}
                </li>
            </ul>
        </div>
        <div className={styles.appointment__reason}>
            <h5>Appointment Reason</h5>
            <p>{appointment.reason}
            </p>
        </div>
    </div>
  </div>
}

export default AppointmentDetails