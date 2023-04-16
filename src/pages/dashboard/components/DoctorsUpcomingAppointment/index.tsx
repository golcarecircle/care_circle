import { Appointment } from "@/util/types";
import { FunctionComponent } from "react";
import styles from "./DoctorsUpcomingAppointments.module.css";
import Link from "next/link";

interface Props {
  doctorId: string;
  appointments: Appointment[];
}

const DoctorsUpcomingAppointments: FunctionComponent<Props> = ({
  doctorId,
  appointments,
}) => {
  const upcomingAppointments = appointments.filter(
    (appointment) =>
      appointment.doctorId === doctorId &&
      new Date(appointment.date) >= new Date()
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Upcoming Appointments</h2>
      {upcomingAppointments.length > 0 ? (
        <ul className={styles.list}>
          {upcomingAppointments.map((appointment) => (
            <li key={appointment.id} className={styles.item}>
              <Link href={`/patient/${appointment.patientId}`}>
                  <span className={styles.date}>
                    {new Date(appointment.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className={styles.time}>
                    {new Date(appointment.date).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </span>
                  <span className={styles.type}>{appointment.type}</span>
                  <span className={styles.patient}>
                    {appointment.patientName}
                  </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No upcoming appointments.</p>
      )}
    </div>
  );
};

export default DoctorsUpcomingAppointments;
