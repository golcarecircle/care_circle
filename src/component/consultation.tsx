import { FC, useState } from "react";

interface ConsultationProps {}

const Consultation: FC<ConsultationProps> = () => {
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [notes, setNotes] = useState<string>("");
  const [diagnosis, setDiagnosis] = useState<string>("");
  const [medications, setMedications] = useState<string[]>([]);
  const [tests, setTests] = useState<string[]>([]);

  const handleSubmit = () => {
    const data = {
      diagnosis,
      symptoms,
      notes,
      medications,
      tests,
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

  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    setNotes(inputValue);
  };

  const handleDiagnosisChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    setDiagnosis(inputValue);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap -mx-3 mb-6 w-full">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="symptoms"
          >
            Symptoms:
          </label>
          <textarea
            className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none"
            id="symptoms"
            onChange={(event) => handleInputChange(event, setSymptoms)}
          ></textarea>
          <p className="text-gray-600 text-xs italic">
            Separate each symptom with a comma
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6 w-full">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="notes"
          >
            Notes:
          </label>
          <textarea
            className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none"
            id="notes"
            onChange={handleNotesChange}
          ></textarea>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6 w-full">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            tests:
          </label>
          <textarea
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none"
            id="test"
            onChange={(event) => handleInputChange(event, setTests)}
          ></textarea>
          <p className="text-gray-600 text-xs italic">
            Separate each symptom with a comma
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6 w-full">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Diagnosis:
          </label>
          <input
            type="text"
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-8 resize-none"
            id="test"
            onChange={handleDiagnosisChange}
          />
          <p className="text-gray-600 text-xs italic">
            Separate each symptom with a comma
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6 w-full">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="medications"
          >
            Medications:
          </label>
          <textarea
            className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none"
            id="medications"
            onChange={(event) => handleInputChange(event, setMedications)}
          ></textarea>
          <p className="text-gray-600 text-xs italic">
            Separate each medication with a comma
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-blue-600 font-semibold text-white p-2 w-32 rounded-md hover:bg-blue-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"
          onClick={handleSubmit}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default Consultation;
