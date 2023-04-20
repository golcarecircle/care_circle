import { Consultation } from "@/types";
import { FC } from "react";

interface MedicalRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
  medicalRecord: Consultation;
}

const MedicalRecordModal: FC<MedicalRecordModalProps> = ({
  isOpen,
  onClose,
  medicalRecord,
}) => {
  return (
    <div
      className={`${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } fixed w-full h-full top-0 left-0 flex items-center justify-center`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Medical Record</p>
            <button
              className="modal-close cursor-pointer z-50"
              onClick={onClose}
            >
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M18 1.5l-1.5-1.5-7.5 7.5-7.5-7.5-1.5 1.5 7.5 7.5-7.5 7.5 1.5 1.5 7.5-7.5 7.5 7.5 1.5-1.5-7.5-7.5z" />
              </svg>
            </button>
          </div>

          <div className="my-5">
            <p className="text-gray-600 text-sm mb-2">Date:</p>
            <p className="text-lg font-semibold">
              {medicalRecord.date.toLocaleString()}
            </p>
          </div>

          <div className="my-5">
            <p className="text-gray-600 text-sm mb-2">Doctor:</p>
            <p className="text-lg font-semibold">{medicalRecord.doctorId}</p>
          </div>

          <div className="my-5">
            <p className="text-gray-600 text-sm mb-2">Symptoms:</p>
            <ul className="list-disc list-inside">
              {medicalRecord.symptoms.map((symptom: string) => (
                <li key={symptom} className="text-lg font-semibold">
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          <div className="my-5">
            <p className="text-gray-600 text-sm mb-2">Diagnosis:</p>
            <p className="text-lg font-semibold">{medicalRecord.diagnosis}</p>
          </div>

          <div className="my-5">
            <p className="text-gray-600 text-sm mb-2">Treatment:</p>
            <p className="text-lg font-semibold">{medicalRecord.medications}</p>
          </div>

          <div className="my-5">
            <p className="text-gray-600 text-sm mb-2">Notes:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecordModal;
