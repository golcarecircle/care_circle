import { FC, useState } from "react";
import SchedulingStepOne from "./scheduling_step_one";
import SchedulingStepTwo from "./scheduling_step_two";
import { Appointment, Doctor } from "@/types";

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. John Doe",
    profilePic:
      "https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg",
    description: "lorem loremloremloremloremloremlorem",
    rating: 2.5,
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    profilePic:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Dr. John Smith",
    profilePic:
      "https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc",
    rating: 4.5,
  },
];

interface ScheduleModalProps {
  close: () => void;
}

const ScheduleModal: FC<ScheduleModalProps> = ({ close }) => {
  const [step, setStep] = useState<number>(1);
  const [selectedDoctorId, setSelectedDoctorId] = useState<number | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleNextStep = (doctorId: number) => {
    setSelectedDoctor(doctors.find((doctor) => doctor.id === doctorId) || null);
    setStep(2);
  };

  const handleBackStep = () => {
    setStep(1);
  };

  const handleSubmit = (schedule: Appointment) => {
    console.log(schedule);
    close();
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-800 bg-opacity-60">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-gray-900 p-2 rounded-lg w-2/6 text-gray-100">
          <button
            className="absolute top-0 right-0 p-4 text-gray-500 hover:text-gray-700"
            onClick={() => close()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M12.243 10l4.28-4.28a1 1 0 0 0-1.414-1.414L10.828 8.586 6.547 4.304a1 1 0 1 0-1.414 1.414L9.414 10l-4.28 4.28a1 1 0 0 0 1.414 1.414L10.828 11.414l4.28 4.28a1 1 0 0 0 1.414-1.414L12.243 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {step === 1 && (
            <SchedulingStepOne
              doctors={doctors}
              onNext={handleNextStep}
              selectedDoctor={selectedDoctorId}
              setSelectedDoctor={setSelectedDoctorId}
            />
          )}
          {step === 2 && selectedDoctor && (
            <SchedulingStepTwo
              selectedDoctor={selectedDoctor}
              onBack={handleBackStep}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
