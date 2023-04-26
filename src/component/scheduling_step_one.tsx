import { FC, useState } from "react";
import Image from "next/image";
import Stars from "./stars";
import { Doctor } from "@/types";

interface SchedulingStepOneProps {
  selectedDoctor: number | null;
  setSelectedDoctor: (doctorId: number) => void;
  doctors: Doctor[];
  onNext: (doctorId: number) => void;
}

const SchedulingStepOne: FC<SchedulingStepOneProps> = ({
  doctors,
  onNext,
  selectedDoctor,
  setSelectedDoctor,
}) => {
  const handleSelectDoctor = (doctorId: number) => {
    setSelectedDoctor(doctorId);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedDoctor !== null) {
      onNext(selectedDoctor);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Select a doctor</h2>
      <form onSubmit={handleSubmit}>
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className={`flex flex-row item-center min-h-15 justify-start p-2 rounded cursor-pointer ${
              selectedDoctor === doctor.id ? "bg-primary" : " hover:bg-gray-800"
            }`}
            onClick={() => handleSelectDoctor(doctor.id)}
          >
            <div className="relative flex items-center mb-4 h-10 w-10 rounded-full self-center">
              <Image
                src={doctor.profilePic}
                alt={doctor.name}
                fill
                className="rounded-full h-full w-full"
              />
            </div>

            <div className="ml-4">
              <div className="flex justify-between">
                <h1>{doctor.name}</h1>
                <Stars rating={doctor.rating} />
              </div>
              <p className="text-sm">{doctor.description}</p>
            </div>
          </div>
        ))}
        {selectedDoctor && (
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
              disabled={selectedDoctor === null}
            >
              Next
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default SchedulingStepOne;
