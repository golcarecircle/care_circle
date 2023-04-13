import Button from '@/components/Btn';
import { FC, useState } from 'react';
import styles from './appointment.module.css';
import Modal from '../modal/modal';
import AppointmentDetails from '../apooontmentDetails/appointmentsDetails';

interface AppointmentProps {}

const Appointment: FC<AppointmentProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <h4>My Appointments</h4>
        <Button size="sm" text={'+ schudule'} onClick={( ) => {}} />
      </div>
      <div className={styles.card__body}>
        <div className={styles.appointment__details}>
          <h5>Upcoming Appointments</h5>
          <div className={styles.appointment__details__item} onClick={handleOpenModal}>
            <div className={styles.date}>
              12 mar 2023
            </div>
            <div className={styles.type}>
              consultation
            </div>
            <div className={styles.time}>
              12:00
            </div>
            <div className={styles.doctor}>
              Dr. James kimani
            </div>
          </div>
          <div className={styles.appointment__details__item}>
            <div className={styles.date}>
              12 mar 2023
            </div>
            <div className={styles.type}>
              consultation
            </div>
            <div className={styles.time}>
              12:00
            </div>
            <div className={styles.doctor}>
              Dr. James kimani
            </div>
          </div>
        </div>
        <div className={styles.appointment__details}>
          <h5>Past Appointments</h5>
          <div className={styles.appointment__details__item}>
            <div className={styles.date}>
              12 mar 2023
            </div>
            <div className={styles.type}>
              consultation
            </div>
            <div className={styles.time}>
              12:00
            </div>
            <div className={styles.doctor}>
              Dr. James kimani
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AppointmentDetails
         appointment={
            {
              type: 'consultation',
              date: '12 mar 2023',
              time: '12:00',
              status: 'pending',
              reason: 'I have a headache',
              doctor: {
                name: 'Dr. James kimani',
                phone: '0700000000',
                email: 'm@.gmail.com',
                img_profile: 'https://picsum.photos/200/300'
              }
            }
         } 
         />
      </Modal>
    </div>
  );
};

export default Appointment;
