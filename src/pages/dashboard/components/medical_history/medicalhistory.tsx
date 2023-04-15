import { useEffect, useState } from 'react';
import { MedicalHistory } from '@/util/types';
import Modal from '../modal/modal';
import TreatmentDetails from '../treatmentDetails';
import styles from './medicalHistory.module.css';

interface MedicalHistoryProps {
  userid: string
}

const MedicalHistory = ({ userid }: MedicalHistoryProps) => {
  const [medicalHistory, setMedicalHistory] = useState<MedicalHistory>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState<MedicalHistory | null>(null);

  useEffect(() => {
    // Make an API call to retrieve the medical history for the given user ID
    fetch(`/api/medical-history/${userid}`)
      .then(response => response.json())
      .then(data => setMedicalHistory(data))
      .catch(error => console.error(error));
  }, [userid]);

  const openModal = (history: MedicalHistory) => {
    setSelectedHistory(history);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.medicalHistory}>
      <table className="w-full text-gray-700 ">
        <thead>
          <tr>
            <th>Date</th>
            <th>Hospital</th>
            <th>Physician</th>
            <th>Description</th>
            <th>Treatment Status</th>
          </tr>
        </thead>
        <tbody>
          {medicalHistory?.consultation.map((history, index) => (
            <tr key={index} onClick={() => openModal()}>
              <td>{history.date}</td>
              <td>{history.physcian.hospital.name}</td>
              <td>{history.physcian.name}</td>
              <td>
                {history.diagnosis.map((diagnosis, index) => (
                  <div key={index}>
                    <p>{diagnosis.name}</p>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedHistory && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <TreatmentDetails  />
        </Modal>
      )}
    </div>
  );
};

export default MedicalHistory;
