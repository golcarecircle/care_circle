import { FC } from "react";
import { TiTick } from "react-icons/ti";

interface StepperProps {
  currentStep: number;
  steps: string[];
}

const Stepper: FC<StepperProps> = ({ currentStep, steps }) => {
  return (
    <>
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-item ${
              index + 1 === currentStep ? "active" : ""
            } ${index + 1 < currentStep ? "complete" : ""}`}
          >
            <div className="step">
              {index + 1 < currentStep ? <TiTick size={24} /> : index + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;
