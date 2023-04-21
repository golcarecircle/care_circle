import { Appointment, Doctor } from "@/types";
import { FC, useState } from "react";
import Image from "next/image";
import Stars from "./stars";

interface SchedulingStepTwoProps {
  selectedDoctor: Doctor | null;
  onBack: () => void;
  onSubmit: (schedule: Appointment) => void;
}

const SchedulingStepTwo: FC<SchedulingStepTwoProps> = ({
  selectedDoctor,
  onBack,
  onSubmit,
}) => {
  const [date, setDate] = useState<string | null>(null);
  const [reason, setReason] = useState<string>("Check-up");
  const [type, setType] = useState<string>("physical");
  const [isDependent, setIsDependent] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedDoctor !== null && date !== null) {
      const schedule: Appointment = {
        date: new Date(date),
        reason: reason as
          | "Check-up"
          | "Follow-up"
          | "Pregnancy"
          | "Emergency"
          | "vaccination"
          | "Mental care",
        type: type as "online" | "physical",
        doctorId: selectedDoctor.id,
      };

      onSubmit(schedule);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-center text-lg font-bold">
        Sechudule an appointment
      </h1>

      <div className="flex flex-col justify-center items-start w-full">
        <h2>Selected Doctor</h2>
        <div className="flex flex-row myb-4">
          <div className="relative flex items-center mb-4 h-10 w-10 rounded-full self-center">
            <Image
              src={selectedDoctor?.profilePic ?? ""}
              alt={selectedDoctor?.name ?? ""}
              fill
              className="rounded-full h-full w-full"
            />
          </div>
          <div className="ml-4">
            <div className="flex justify-between">
              <h1>{selectedDoctor?.name}</h1>
              <Stars rating={selectedDoctor?.rating} />
            </div>
            <p className="text-sm">{selectedDoctor?.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        <label className="block mb-2 font-bold mr-4" htmlFor="date">
          Date:
        </label>
        <input
          id="date"
          type="datetime-local"
          name="date"
          value={date ?? ""}
          onChange={(event) => setDate(event.target.value)}
          required
          className="border border-gray-300 rounded px-2 py-1 mb-4 text-gray-600 flex-grow"
        />
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="mr-2 flex flex-1 self-start justify-between">
          <label className="block mb-2 font-bold mr-4" htmlFor="reason">
            Reason:
          </label>
          <select
            id="reason"
            name="reason"
            value={reason}
            onChange={(event) => setReason(event.target.value as typeof reason)}
            className="border border-gray-300 rounded px-2 py-1 mb-4 text-gray-600 flex-grow"
          >
            <option value="Check-up">Check-up</option>
            <option value="Follow-up">Follow-up</option>
            <option value="Pregnancy">Pregnancy</option>
            <option value="Emergency">Emergency</option>
            <option value="vaccination">Vaccination</option>
            <option value="Mental care">Mental care</option>
          </select>
        </div>

        <div className="flex ml-2 flex-1 self- justify-between">
          <label className="block mb-2 font-bold mr-4" htmlFor="type">
            Type:
          </label>
          <select
            id="type"
            name="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="border border-gray-300 rounded px-2 py-1 mb-4 text-gray-600 flex-grow"
          >
            <option value="physical">Physical</option>
            <option value="online">Online</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <input
          type="checkbox"
          name="dependant"
          id="dependant"
          checked={isDependent}
          onChange={(event) => setIsDependent(event.target.checked)}
          className="border border-gray-300 rounded px-2 py-1 mb-4 text-gray-600"
        />
        <p className="text-gray-200 text-sm flex-grow ml-2">
          check this if the Appointment is for a dependant eg.child else as is{" "}
        </p>
      </div>

      <div className="flex justify-center items-center w-full text-center mt-4">
        <p className="text-gray-200 text-sm">
          By clicking Schedule Appointment, you give the selected doctor
          permission to view and edit your medical history.
        </p>
      </div>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="bg-gray-600 text-white rounded-md py-2 px-4 hover:bg-gray-700"
          onClick={onBack}
        >
          Back Back
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white   rounded-md py-2 px-4 hover:bg-blue-600"
          disabled={date === null}
        >
          Schedule
        </button>
      </div>
    </form>
  );
};

export default SchedulingStepTwo;
