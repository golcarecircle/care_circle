import { FC, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Patient } from '@/util/types';
import styles from './Patient.module.css';

const mpatient =     {
    id: "1",
    name: "Alice",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    age: 28,
    gender: "Female",
    phone: "555-1234",
    email: "alice@example.com",
    address: "123 Main St",
    notes: "Allergic to penicillin",
    medicalHistory: [
      { date: "2022-01-01", notes: "Flu-like symptoms" },
      { date: "2021-10-15", notes: "Annual physical" },
      { date: "2021-03-12", notes: "Sprained ankle" },
    ],
    appointments: [
      { date: "2022-01-03", time: "10:30 AM", notes: "Follow up for flu-like symptoms" },
      { date: "2021-10-15", time: "9:00 AM", notes: "Annual physical" },
      { date: "2021-03-12", time: "2:15 PM", notes: "Follow up for sprained ankle" },
    ],
    createdAt: "2021-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  };

interface PatientProps {
  patient: Patient;
}

interface Tab {
  id: number;
  title: string;
}

const tabs: Tab[] = [
  { id: 1, title: 'History' },
  { id: 2, title: 'Treatments' },
  { id: 3, title: 'Add History' },
  { id: 4, title: 'Add Treatment' },
  { id: 5, title: 'Add Note' },
];

const PatientPage: FC<PatientProps> = ({ patient }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.image}>
          <img
            src={mpatient.profilePic}
            alt={`${mpatient.name}'s profile picture`}
            width={120}
            height={120}
          />
        </div>
        <div className={styles.info}>
          <h2 className={styles.name}>{mpatient.name}</h2>
          <div className={styles.biodata}>
            <p className={styles.item}>
              <span className={styles.label}>Age:</span> {mpatient.age}
            </p>
            <p className={styles.item}>
              <span className={styles.label}>Gender:</span> {mpatient.gender}
            </p>
            <p className={styles.item}>
              <span className={styles.label}>Phone:</span> {mpatient.phone}
            </p>
            <p className={styles.item}>
              <span className={styles.label}>Email:</span> {mpatient.email}
            </p>
            <p className={styles.item}>
              <span className={styles.label}>Address:</span> {mpatient.address}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.tabs}>
        <ul className={styles.tabList}>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`${styles.tabItem} ${
                activeTab === tab.id ? styles.active : ''
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        <div className={styles.tabContent}>
          {activeTab === 1 && <p>History</p>}
          {activeTab === 2 && <p>Treatments</p>}
          {activeTab === 3 && <p>Add History</p>}
          {activeTab === 4 && <p>Add Treatment</p>}
          {activeTab === 5 && <p>Add Note</p>}
        </div>
      </div>
    </div>
  );
};

export default PatientPage;
