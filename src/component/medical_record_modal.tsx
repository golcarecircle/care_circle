import { MedicalRecord } from "@/types";
import { FC } from "react";

interface MedicalRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
  medicalRecord: MedicalRecord;
}

const MedicalRecordModal: FC<MedicalRecordModalProps> = ({
  isOpen,
  onClose,
  medicalRecord,
}) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-800 bg-opacity-60 ">
      <div className="flex items-center justify-center min-h-screen py-16">
        <div className="relative bg-gray-900 p-2 rounded-lg w-2/6 text-gray-100">
          <div className="py-4 text-left text-gray-50 px-6 h-fit">
            <div className="flex justify-between items-center pb-3">
              <p className="text-lg font-bold">
                <span>
                  {medicalRecord.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>{" "}
                Check-up Record
              </p>
              <button
                className="modal-close cursor-pointer z-50"
                onClick={onClose}
              >
                <svg
                  className="fill-current text-gray-50"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M18 1.5l-1.5-1.5-7.5 7.5-7.5-7.5-1.5 1.5 7.5 7.5-7.5 7.5 1.5 1.5 7.5-7.5 7.5 7.5 1.5-1.5-7.5-7.5z" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col">
              {/* CheckUp details */}
              <div className="my-4">
                <h2 className="font-bold mb-2">CheckUp details :</h2>
                <div className="h-28 w-full bg-gray-800 rounded-lg">
                  <div className="flex flex-row justify-between w-full p-2">
                    <div className="flex flex-col flex-1 p-2">
                      <div className="flex justify-between text-sm">
                        <p className="font-bold">Date:</p>
                        <p>
                          {`${new Date(medicalRecord.date).toLocaleDateString(
                            "en-US",
                            {
                              year: "2-digit",
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                            }
                          )}`}
                        </p>
                      </div>
                      <div className="flex justify-between text-sm">
                        <p className="font-bold">Type:</p>
                        <p>{medicalRecord.type}</p>
                      </div>
                      <div className="flex justify-between text-sm">
                        <p className="font-bold">Reason:</p>
                        <p>{medicalRecord.reason}</p>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-2">
                      <div className="flex justify-between text-sm">
                        <p className="font-bold">Consulting Doctors :</p>
                        <p>{medicalRecord.doctorName}</p>
                      </div>
                      {medicalRecord.updatedBy && <><div className="flex justify-between text-sm">
                        <p className="font-bold">Updated by:</p>
                        <p>{medicalRecord.updatedBy}</p>
                      </div><div className="flex justify-between text-sm">
                          <p className="font-bold">Updated On:</p>
                          <p>
                            {`${medicalRecord.updatedAt.toLocaleDateString(
                              "en-US",
                              {
                                year: "2-digit",
                                month: "short",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                              }
                            )}`}
                          </p>
                        </div></>}
                      <div className="flex justify-between text-sm">
                        <p className="font-bold">Hospital:</p>
                        <p>{medicalRecord.hospital}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* clinical findings */}
              <div className="my-4">
                <h2 className="font-bold mb-2">Clinical Findings:</h2>
                <div className="h-28 w-full bg-gray-800 rounded-lg">
                  <div className="flex flex-row justify-between w-full p-2">
                    <p>{medicalRecord.clinicalFindings};</p>
                  </div>
                </div>
              </div>
              {/* clinical diagnostic tests */}
              <div className="my-4">
                <h2 className="font-bold mb-2">Diagnostic Tests :</h2>
                <div className="h-28 w-full bg-gray-800 rounded-lg">
                  {
                    medicalRecord.diagnosticTests.map((test, index) => (
                      <div key={index} className="flex flex-row justify-between w-full p-2">
                        <p className="font-bold">{test.name}</p>
                        <p>{test.result}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
              {/* diagnosis tests
              <div className="my-4">
                <h2 className="font-bold mb-2">Diagnosis :</h2>
                <div className="h-28 w-full bg-gray-800 rounded-lg">
                  {
                    medicalRecord.diagnosis.map((diagnosis, index) => (
                      <div key={index} className="flex flex-row justify-between w-full p-2">
                        <p className="font-bold">{diagnosis.name}</p>
                        <p>{diagnosis.description}</p>
                      </div>
                    ))
                  }
                </div>
              </div> */}
              {/* Medication */}
              <div className="my-4">
                <h2 className="font-bold mb-2">Medications :</h2>
                <div className="h-28 w-full bg-gray-800 rounded-lg">
                  {
                    medicalRecord.medications.map((medication, index) => (
                      <div key={index} className="flex flex-row justify-between w-full p-2">
                        <p className="font-bold">{medication.name}</p>
                        <p>{medication.start.toLocaleDateString('us-en')}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecordModal;
