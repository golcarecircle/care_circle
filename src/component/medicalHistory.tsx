import {MedicalRecord } from "@/types";
import { FC, useState } from "react";
import MedicalRecordModal from "./medical_record_modal";

const records: MedicalRecord[] = [
  {
    id: '12345',
    patientName: "John Smith",
    date: new Date("2022-04-20"),
    reason: 'Check-up',
    type: 'online',
    clinicalFindings: "Patient has a high fever and cough",
    diagnosticTests: [
      {
        name: "Blood Test",
        result: "Elevated white blood cell count"
      },
      {
        name: "Chest X-Ray",
        result: "Consistent with pneumonia"
      }
    ],
    hospital:"kenyatta",
    medications: [
      {
        name: "Antibiotics",
        dosage: "500mg",
        frequency: "twice a day",
        start: new Date("2022-04-21"),
        end: new Date("2022-04-28"),
      }
    ],
    doctorName: "Dr. Jane Doe",
    updatedAt: new Date("2022-04-21"),
    updatedBy: "Dr. Jane Doe",
    status: 'completed'
    
  }  
];

interface MedicalHistoryProps {}

const MedicalHistory: FC<MedicalHistoryProps> = ({}) => {
  const [selectedRecord, setSelectedRecord] = useState<MedicalRecord | null>(
    null
  );
  const [modelOpen, setModalOpen] = useState(false);

  const handleRecordClick = (record: MedicalRecord) => {
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
            <td className="py-4 border-b border-gray-700">Clinical findings</td>
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

              <td className="py-4">{record.doctorName}</td>
              <td className="py-4">{record.clinicalFindings}</td>
              <td className="py-4">{record.medications.map((medication, index) => (
                <div key={index} className="flex text-sm">
                  <span className="font-semibold">{medication.name}</span>
                </div>
              ))}</td>

              <td className="py-4 flex justify-center">
              <span
  className={`flex justify-center py-1 w-24 font-medium capitalize rounded-full ${
    record.status === "inProgress"
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
