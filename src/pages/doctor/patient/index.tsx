import ProfileCard from "@/component/profile_card";
import PatientTabs from "@/component/tabs";
import { FC } from "react";

interface PatientProps {}

const Patient: FC<PatientProps> = ({}) => {
  return (
    <div className="flex flex-row">
      <ProfileCard />
      <div className="bg-gray-900 w-full m-4 br">
        <PatientTabs usertype="Doctor" />
      </div>
    </div>
  );
};

export default Patient;
