import { FC } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './CustomCalendar.module.css';

interface CustomCalendarProps {}

const CustomCalendar: FC<CustomCalendarProps> = ({}) => {
  return (
    <div className={styles.calendar}>
      <h5 className={styles.heading}>Calendar</h5>
      <Calendar
        tileClassName={styles.tile}
        showNavigation={false}
      />
    </div>
  );
}

export default CustomCalendar;
