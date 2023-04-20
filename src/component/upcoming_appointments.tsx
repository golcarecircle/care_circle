import { ChevronDownIcon } from "@/icons/icons";
import { FC } from "react";

interface Appointment {
  id: number;
  patientName: string;
  date: string;
  time: string;
}

const upcomingAppointments: Appointment[] = [
  {
    id: 1,
    patientName: "John Doe",
    date: "2023-04-19",
    time: "10:30 AM",
  },
  {
    id: 2,
    patientName: "Alice Smith",
    date: "2023-04-20",
    time: "2:00 PM",
  },
  {
    id: 3,
    patientName: "Bob Johnson",
    date: "2023-04-21",
    time: "9:15 AM",
  },
];

interface UpcomingAppointmentsProps {}

const UpcomingAppointments: FC<UpcomingAppointmentsProps> = ({}) => {
  return (
    <div className="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold leading-loose text-white">
          Upcoming Appointments
        </h2>
        <button className="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700">
          <ChevronDownIcon />
          <span className="text-sm text-white">Today</span>
        </button>
      </div>
      <hr className="border-gray-700" />
      <div className="flex flex-col gap-y-4">
        {upcomingAppointments.map((appointment) => (
          <div key={appointment.id} className="flex gap-x-4 items-center">
            <div className="w-14 h-14 rounded-full bg-gray-600 text-white flex items-center justify-center">
              {appointment.patientName.charAt(0)}
            </div>
            <div className="flex flex-col gap-y-0.5">
              <div className="text-sm font-medium text-white">
                {appointment.patientName}
              </div>
              <div className="text-xs text-gray-500">
                {appointment.date} at {appointment.time}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="py-3.5 rounded-lg w-full border border-primary text-primary text-sm font-semibold">
        View all
      </button>
    </div>
  );
};

export default UpcomingAppointments;
