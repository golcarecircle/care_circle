import { FC, useState } from "react";

interface SheduleAppointmetProps {}

const SheduleAppointmet: FC<SheduleAppointmetProps> = ({}) => {
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [date, setDate] = useState<Date>();

  const handleSubmit = () => {
    const data = {
      symptoms,
      date,
    };
    console.log(data);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const inputValue = event.target.value;
    const inputArray = inputValue.split(",");
    setter(inputArray.map((item) => item.trim()));
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setDate(new Date(inputValue));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 text-white">
        Schedule Appointment
      </h1>
      <div className="flex flex-wrap -mx-3 mb-6 w-full">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="symptoms"
          >
            Symptoms:
          </label>
          <textarea
            className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28"
            id="symptoms"
            onChange={(event) => handleInputChange(event, setSymptoms)}
          ></textarea>
          <p className="text-gray-600 text-xs italic">
            Separate each symptom with a comma
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="date"
          >
            Date and Time
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="date"
            type="datetime-local"
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Schedule
        </button>
      </div>
    </div>
  );
};

export default SheduleAppointmet;
