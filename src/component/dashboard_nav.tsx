import { Session } from "next-auth";
import { FC } from "react";
import { IoMdNotifications } from "react-icons/io";
import Logo from "./logo";

interface DashboardNavProps {
  session: Session | null;
}

const DashboardNav: FC<DashboardNavProps> = ({ session }) => {
  return (
    <div className="container px-4 mx-auto bg-gray-900 rounded">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 text-gray-600 placeholder-gray-500 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white focus:text-gray-900"
            />
          </div>
          <div className="relative">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute top-0 right-0">
                  <div className="flex items-center justify-center w-3 h-3 text-white bg-red-500 rounded-full">
                    <p className="text-xs font-normal">2</p>
                  </div>
                </div>
                <IoMdNotifications className="w-6 h-6 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="flex items-center">
              <div className="w-10 h-10">
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1680763921539-afae7b2c219e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1526&q=80"
                  alt="avatar"
                />
              </div>
              <p className="ml-3 text-gray-600">Jone Doe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
