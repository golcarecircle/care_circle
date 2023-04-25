import { FC, useState } from "react";
import { useAppDispatch } from "@/hooks/useAppSelector";
import {
  addAllergy,
  addCondition,
  addMedication,
  selectMedicalInfo
} from "@/store/slices/medicalInfoSlice";
import { useSelector } from "react-redux";

interface MedicalInfoProps {}

const MedicalInfo: FC<MedicalInfoProps> = ({}) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
    const medicalInfo = useSelector(selectMedicalInfo);


  const handleAddAllergy = () => {
    dispatch(addAllergy(inputValue));
    setInputValue("");
  };

  const handleAddCondition = () => {
    dispatch(addCondition(inputValue));
    setInputValue("");
  };

  const handleAddMedication = () => {
    dispatch(addMedication(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add allergy, condition, or medication"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddAllergy}>Add Allergy</button>
        <button onClick={handleAddCondition}>Add Condition</button>
        <button onClick={handleAddMedication}>Add Medication</button>
      </div>
      <div>
        <h3>Allergies:</h3>
        {medicalInfo.allergies.map((allergy:string, index:number) => (
          <div key={index}>{allergy}</div>
        ))}
      </div>
      <div>
        <h3>Conditions:</h3>
        {medicalInfo.conditions.map((condition, index) => (
          <div key={index}>{condition}</div>
        ))}
      </div>
      <div>
        <h3>Medications:</h3>
        {medicalInfo.disabilities.map((disability, index) => (
          <div key={index}>{disability}</div>
        ))}
      </div>
    </div>
  );
};

export default MedicalInfo;
