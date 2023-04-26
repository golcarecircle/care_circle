import { LogNew, MedicalHistory } from "@/icons/icons";
import { FC } from "react";

interface Tab {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface TabsHeaderProps {
  userType: string;
  activeTab: string;
  onTabClick: (tabId: string) => void;
}

const tabs: Tab[] = [
  { title: "Medical History", icon: MedicalHistory },
  { title: "Schedule Appointment", icon: LogNew },
  { title: "LogNew", icon: LogNew },
];

const TabsHeader: FC<TabsHeaderProps> = ({
  userType,
  activeTab,
  onTabClick,
}) => {
  const filteredTabs =
    userType === "patient"
      ? tabs.filter((tab) => tab.title !== "LogNew")
      : tabs.filter((tab) => tab.title !== "Schedule Appointment");

  return (
    <ul className="flex text-center w-full ">
      {filteredTabs.map((tab) => (
        <li
          className={
            "flex-1  " +
            (activeTab === tab.title
              ? "border-b-primary border-b-2 text-primary "
              : "text-white hover:text-primary")
          }
          key={tab.title}
        >
          <div
            className="relative block p-4"
            onClick={() => onTabClick(tab.title)}
          >
            <div className="flex items-center justify-center gap-4">
              <tab.icon className="h-4 w-4 flex-shrink-0 fill-current" />
              <span className="text-sm font-medium text-current">
                {tab.title}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TabsHeader;
