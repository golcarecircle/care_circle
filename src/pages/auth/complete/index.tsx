import { FC, useState } from "react";
import Dependants from "./dependants";
import InsuranceInfo from "./insuranceInfo";
import MedicalInfo from "./medicalInfo";
import PersonalInfo from "./personalInfo";
import Stepper from "@/component/stepper";

interface IndexProps {}

const steps = ["Personal Info", "medical Info", "Dependants", "Insurance Info"];

const Index: FC<IndexProps> = ({}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return;
      case 2:
        return;
      case 3:
        return;
      case 4:
        return;
      default:
        return null;
    }
  };

  return (
    <div className="h-fit max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
          Welcome to careCircle
        </h1>

        <p className="max-w-md mx-auto mt-4 text-center text-gray-900">
          Just a few more steps and we are good
        </p>

        <div className="flex items-center justify-start border-2 w-full my-4 rounded-sm shadow-lg">
          <div className="flex flex-col w-full p-8">
            <Stepper currentStep={currentStep} steps={steps} />
            <span className="text-sm text-gray-600">
              {currentStep === 1 && <PersonalInfo next={handleNext} />}
              {currentStep === 2 && <MedicalInfo next={handleNext} />}
              {currentStep === 3 && <Dependants />}
              {currentStep === 4 && <InsuranceInfo />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
