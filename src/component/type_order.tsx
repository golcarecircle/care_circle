import { Chart, ChevronDownIcon } from "@/icons/icons";
import { FC } from "react";

interface PatientStatsProps {}

const PatientStats: FC<PatientStatsProps> = ({}) => {
  return (
    <div className="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold leading-loose text-white">
          Patients stats
        </h2>
        <button className="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700">
          <ChevronDownIcon />
          <span className="text-sm text-white">Today</span>
        </button>
      </div>
      <hr className="border-gray-700" />
      <div className="flex gap-x-7">
        <Chart />
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-2 items-start">
            <div className="w-4 h-4 mt-0.5 rounded-full bg-accent-red" />
            <div>
              <div className="text-sm font-medium text-white">Walk in</div>
              <div className="text-xs text-gray-500">200 Patients</div>
            </div>
          </div>
          <div className="flex gap-x-2 items-start">
            <div className="w-4 h-4 mt-0.5 rounded-full bg-accent-orange" />
            <div>
              <div className="text-sm font-medium text-white">Appointments</div>
              <div className="text-xs text-gray-500">5 Today</div>
            </div>
          </div>
          <div className="flex gap-x-2 items-start">
            <div className="w-4 h-4 mt-0.5 rounded-full bg-accent-blue" />
            <div>
              <div className="text-sm font-medium text-white">Total</div>
              <div className="text-xs text-gray-500">264 Patients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientStats;
