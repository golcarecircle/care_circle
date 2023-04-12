import { FC, useState } from 'react';
import styles from './medicalHistory.module.css';

interface Prescription{
    medicine_name: string;
    dosage: string;
    frequency: string;
    duration: string;
}

interface Diagnosis {
  description: string;
  prescription: [
    Prescription
  ];
  startDate: Date
}

interface Test {
    name: string;
    result: string;
}

interface MedicalHistoryProps {
  history: {
    date: string;
    hospital: string;
    physcian: string
    physcianNotes: string;
    tests: [
        Test
    ];
    treatmentPlan: string;
    diagnosis: Diagnosis;
    treatmentStatus: string
  }[];
}

const MedicalHistory: FC<MedicalHistoryProps> = ({ history }) => {
  const [selectedItem, setSelectedItem] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.medicalHistory}>
      <table className={styles.medicalHistory__table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Chief Complaint</th>
            <th>Diagnosis</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index} onClick={() => handleItemClick(index)}>
              <td>{item.date}</td>
              <td>{item.hospital}</td>
                <td>{item.physcian}</td>

              <td>{item.diagnosis.description}</td>
              <td>{item.treatmentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modal__header}>
                <h1>Medical History</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalHistory;
