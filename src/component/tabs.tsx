import { FC, useState } from "react";
import Consultation from "./consultation";
import MedicalHistory from "./medicalHistory";
import TabsHeader from "./patient_tabs_header";
import SheduleAppointmet from "./shedule_appointmet";

interface PatientTabsProps {
  usertype: string;
}

const PatientTabs: FC<PatientTabsProps> = ({ usertype }) => {
  const [activeTab, setActiveTab] = useState("Medical History");
  const handleClick = (activeTab: string) => {
    setActiveTab(activeTab);
  };

  let content;

  if (activeTab === "Medical History") {
    content = <MedicalHistory />;
  } else if (activeTab === "LogNew") {
    content = <Consultation />;
  } else if (activeTab === "Schedule Appointment") {
    content = <SheduleAppointmet />;
  } else {
    content = <div>No content available for this tab</div>;
  }

  return (
    <div className="flex flex-col w-full bg-gray-900 ">
      <TabsHeader
        activeTab={activeTab}
        onTabClick={handleClick}
        userType={usertype}
      />
      <div className="flex flex-col gap-y-4 p-6">{content}</div>
    </div>
  );
};

export default PatientTabs;
