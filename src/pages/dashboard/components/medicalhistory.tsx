import { FC, useState } from 'react';
import Modal from '../patient/pages/components/modal/modal';
import TreatmentDetails from '../patient/pages/components/treatmentDetails';
import styles from './medicalHistory.module.css';

interface Prescription {
  medicine_name: string;
  dosage: string;
  frequency: string;
  duration: string;
}

interface Diagnosis {
  description: string;
  code: string;
  startDate: string;
  prescription: [Prescription];
}

interface Test {
  name: string;
  result: string;
}

interface MedicalHistoryProps {
  history: {
    date: string;
    hospital: string;
    physcian: string;
    physcianNotes: string;
    tests: [Test];
    treatmentPlan: string;
    diagnosis: Diagnosis;
    treatmentStatus: string;
  }[];
}

const MedicalHistory: FC<MedicalHistoryProps> = ({ history }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const OpenModal = () => {
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
            <th>hospital</th>
            <th>physcian</th>
            <th>description</th>
            <th>treatment status</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index} onClick={OpenModal}>
              <td>{item.date}</td>
              <td>{item.hospital}</td>
              <td>{item.physcian}</td>

              <td>{item.diagnosis.description}</td>
              <td>{item.treatmentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={closeModal} >
        <TreatmentDetails 
          history={history}
        />
      </Modal>
    </div>
  );
};

export default MedicalHistory;
