import { FC, useState } from 'react';
import styles from './medicalHistory.module.css';

interface Diagnosis {
  description: string;
  prescription: string;
}

interface MedicalHistoryProps {
  history: {
    date: string;
    chiefComplaint: string;
    diagnosis: Diagnosis;
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
              <td>{item.chiefComplaint}</td>
              <td>{item.diagnosis.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
            <h2>{history[selectedItem].chiefComplaint}</h2>
            <h3>Diagnosis:</h3>
            <p>{history[selectedItem].diagnosis.description}</p>
            <h3>Prescription:</h3>
            <p>{history[selectedItem].diagnosis.prescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalHistory;
