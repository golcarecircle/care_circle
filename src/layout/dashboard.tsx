import DashboardNav from "@/component/dashboard_nav";
import Sidebar from "@/component/sidebar";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
  userType: string;
};

const DashboardLayout: FC<Props> = ({ children, userType }) => {
  return (
    <div className="flex w-full h-screen font-sans bg-gray-800 ">
      <Sidebar userType={userType} />
      <main className="flex flex-col flex-1 gap-6 p-4 rounded-lg overflow-hidden h-full">
        <DashboardNav session={null} />
        <div className="overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-800 h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
