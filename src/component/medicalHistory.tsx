import { Consultation } from "@/types";
import { FC, useState } from "react";
import MedicalRecordModal from "./medical_record_modal";

const records: Consultation[] = [
  {
    date: new Date("2023-04-18"),
    patientId: "P001",
    doctorId: "D001",
    diagnosis: "Hypertension",
    symptoms: ["headache", "dizziness"],
    medications: ["Amlodipine", "Hydrochlorothiazide"],
    tests: ["Blood pressure measurement", "Cholesterol test"],
    status: "inProgess",
  },
  {
    date: new Date("2023-04-15"),
    patientId: "P002",
    doctorId: "D002",
    diagnosis: "Diabetes",
    symptoms: ["increased thirst", "frequent urination"],
    medications: ["Metformin", "Insulin"],
    tests: ["Blood glucose test", "HbA1c test"],
    status: "completed",
  },
  {
    date: new Date("2023-04-12"),
    patientId: "P003",
    doctorId: "D003",
    diagnosis: "Asthma",
    symptoms: ["shortness of breath", "wheezing"],
    medications: ["Albuterol", "Fluticasone"],
    tests: ["Lung function test", "Allergy test"],
    status: "completed",
  },
];

interface MedicalHistoryProps {}

const MedicalHistory: FC<MedicalHistoryProps> = ({}) => {
  const [selectedRecord, setSelectedRecord] = useState<Consultation | null>(
    null
  );
  const [modelOpen, setModalOpen] = useState(false);

  const handleRecordClick = (record: Consultation) => {
    setSelectedRecord(record);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedRecord(null);
    setModalOpen(false);
  };

  function formatDate(date: Date): string {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US");
  }

  return (
    <div className="p-2 bg-gray-900 rounded-lg h-full">
      <table className="w-full">
        <thead>
          <tr className="text-sm font-semibold text-white">
            <td className="py-4 border-b border-gray-700 text-left">Date</td>
            <td className="py-4 border-b border-gray-700">Doctors Name</td>
            <td className="py-4 border-b border-gray-700">Diagnosis</td>
            <td className="py-4 border-b border-gray-700">Prescription</td>
            <td className="py-4 border-b border-gray-700 text-center">
              Status
            </td>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr
              key={record.id}
              className="text-sm text-gray-500 hover:bg-slate-600 cursor-pointer"
              onClick={() => handleRecordClick(record)}
            >
              <td className="py-4 tabular-nums text-left">
                {formatDate(record.date)}
              </td>

              <td className="py-4">{record.doctorId}</td>
              <td className="py-4">{record.diagnosis}</td>
              <td className="py-4">{record.medications}</td>

              <td className="py-4 flex justify-center">
                <span
                  className={`flex justify-center py-1 w-24 font-medium capitalize rounded-full ${
                    record.status === "inProgess"
                      ? "bg-accent-green/20 text-accent-green"
                      : record.status === "completed"
                      ? "bg-accent-purple/20 text-accent-purple"
                      : "bg-accent-orange/20 text-accent-green"
                  }`}
                >
                  {record.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedRecord && (
        <MedicalRecordModal
          isOpen={modelOpen}
          onClose={handleModalClose}
          medicalRecord={selectedRecord}
        />
      )}
    </div>
  );
};

export default MedicalHistory;
