import {
  DashboardIcon,
  LogoutIcon,
  MessageIcon,
  NotificationIcon,
  SettingsIcon,
} from "@/icons/icons";
import { useState } from "react";
import { useRouter } from "next/router";
import Logo from "./logo";

type Menu = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  route: string;
};

type SidebarProps = {
  userType: string;
};

const getMenus = (userType: string): Menu[] => {
  switch (userType) {
    case "patient":
      return [
        { name: "Dashboard", icon: DashboardIcon, route: "/patient" },
        { name: "Messages", icon: MessageIcon, route: "/patient/inbox" },
        { name: "Settings", icon: SettingsIcon, route: "/patient/settings" },
        { name: "Logout", icon: LogoutIcon, route: "/logout" },
      ];
    case "doctor":
      return [
        { name: "Dashboard", icon: DashboardIcon, route: "/doctor" },
        {
          name: "Appointments",
          icon: NotificationIcon,
          route: "/doctor/appointments",
        },
        { name: "Messages", icon: MessageIcon, route: "/doctor/messages" },
        { name: "Settings", icon: SettingsIcon, route: "/doctor/settings" },
        { name: "Logout", icon: LogoutIcon, route: "/logout" },
      ];
    default:
      return [];
  }
};

const Sidebar: React.FC<SidebarProps> = ({ userType }) => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const router = useRouter();

  const menus = getMenus(userType);

  const handleClick = (menu: Menu) => {
    setActiveMenu(menu.name);
    router.push(menu.route);
  };

  return (
    <div className="flex flex-col gap-y-4 items-center py-8 bg-gray-900 w-min">
      <Logo color="white" />
      <div className="flex flex-col items-start self-start">
        {menus.map((menu) => (
          <div key={menu.name} className="w-full items-start justify-start p-4">
            <button
              onClick={() => handleClick(menu)}
              className={`flex flex-start items-start justify-left p-4 rounded-md w-full
                ${
                  activeMenu === menu.name
                    ? "text-white shadow-primary bg-primary"
                    : "text-gray-100 hover:bg-gray-400 hover:text-black"
                }`}
            >
              <menu.icon
                className={`w-6 h-6 fill-current mr-2 ${
                  activeMenu === menu.name ? "text-white" : "text-text-gray-100"
                }`}
              />
              {menu.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
