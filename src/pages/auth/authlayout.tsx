import Logo from "@/component/logo";
import { FC, ReactNode } from "react";
import { BiPlusMedical } from "react-icons/bi";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="items-center justify-around hidden w-full lg:flex lg:w-1/2 login_img_section">
        <div className="flex-col items-center w-full px-20 mx-auto space-y-6">
          <div className="flex items-center justify-start">
            <div className="flex justify-center w-10 h-10 p-1 mr-2 rounded-full item-center bg-primary">
              <BiPlusMedical className="w-full h-full fill-white bg" />
            </div>
            <h1 className="text-2xl font-bold text-gray-100">CareCircle</h1>
          </div>
          <p className="mt-1 text-xl text-white">
            Explore the features of CareCircle and empower yourself to lead a
            healthier, more informed life.
          </p>
          <div className="flex justify-center mt-6 lg:justify-start">
            <a
              href="#"
              className="px-4 py-2 mt-4 mb-2 font-bold text-indigo-800 transition-all duration-500 bg-white hover:bg-indigo-700 hover:text-white hover:-translate-y-1 rounded-2xl"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full space-y-8 bg-white lg:w-1/2">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
