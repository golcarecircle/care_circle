import { FC, useState } from "react";
import { useAppDispatch } from "@/hooks/useAppSelector";
import {
  addAllergy,
  addCondition,
  addMedication,
  removeMedicalInfoItem,
  selectMedicalInfo,
} from "@/store/slices/medicalInfoSlice";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/router";

interface MedicalInfoProps {
  next: () => void;
}

const MedicalInfo: FC<MedicalInfoProps> = ({ next }) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const medicalInfo = useSelector(selectMedicalInfo);

  const handleAddAllergy = () => {
    if (inputValue.trim() !== "") {
      dispatch(addAllergy(inputValue));
      setInputValue("");
    }
  };

  const handleAddCondition = () => {
    if (inputValue.trim() !== "") {
      dispatch(addCondition(inputValue));
      setInputValue("");
    }
  };

  const handleAddMedication = () => {
    if (inputValue.trim() !== "") {
      dispatch(addMedication(inputValue));
      setInputValue("");
    }
  };

  const handleRemoveItem = (category: string, index: number) => {
    dispatch(removeMedicalInfoItem({ category, index }));
  };

  const handleMedicalInfo = () => {
    console.log(medicalInfo);
    router.push("/patient")
  };

  return (
    <div className="p-4 mt-6 mb-0 space-y-4 rounded-lg sm:p-6 lg:p-8">
      <div className="h-fit w-full ">
        <div className="flex justify-between">
          <h1 className="text-lg font-lg ">Allergies:</h1>
          <button
            onClick={handleAddAllergy}
            className="block px-2 py-2 text-sm font-medium text-white bg-primary rounded-lg"
          >
            Add
          </button>
        </div>
        <ol className="flex flex-col w-full px-4 list-decimal list-inside">
          {medicalInfo.allergies.map((allergy: string, index: number) => (
            <li
              key={index}
              className="flex justify-between text-lg font-sm mt-4"
            >
              {allergy}
              <MdDelete
                className="fill-accent-danger cursor-pointer"
                onClick={() => handleRemoveItem("allergies", index)}
              />
            </li>
          ))}
        </ol>
      </div>
      <div className="h-fit w-full ">
        <div className="flex justify-between">
          <h1 className="text-lg font-lg ">Conditions:</h1>

          <button
            onClick={handleAddCondition}
            className="block px-2 py-2 text-sm font-medium text-white bg-primary rounded-lg"
          >
            Add
          </button>
        </div>
        <ol className="flex flex-col w-full px-4">
          {medicalInfo.conditions.map((condition, index) => (
            <li
              key={index}
              className="flex justify-between text-lg font-sm mt-4"
            >
              {condition}
              <MdDelete
                className="fill-accent-danger cursor-pointer"
                onClick={() => handleRemoveItem("conditions", index)}
              />
            </li>
          ))}
        </ol>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-lg font-lg">Disability:</h1>
          <button
            onClick={handleAddMedication}
            className="block px-2 py-2 text-sm font-medium text-white bg-primary rounded-lg"
          >
            Add
          </button>
        </div>
        <ol className="flex flex-col w-full px-4">
          {medicalInfo.disabilities.map((disability, index) => (
            <li
              key={index}
              className="flex justify-between text-lg font-sm mt-4"
            >
              {disability}
              <MdDelete
                className="fill-accent-danger cursor-pointer"
                onClick={() => handleRemoveItem("disabilities", index)}
              />
            </li>
          ))}
        </ol>
      </div>
      <div className="flex items-center w-full mb-2 border-2 rounded-2xl">
        <input
          type="text"
          className="w-full pl-2 border-none outline-none h-full px-2 py-2  rounded-2xl "
          placeholder="Add allergy, condition, or medication"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleMedicalInfo}
          className="block px-2 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg"
        >
          save
        </button>
      </div>
    </div>
  );
};

export default MedicalInfo;
