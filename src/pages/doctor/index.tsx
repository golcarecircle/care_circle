import MostOrdered from "@/component/upcoming_appointments";
import PatientReport from "@/component/patients";
import Stats from "@/component/stats";
import PatientStats from "@/component/type_order";
import { Appointment, CoinIcon, CustomerIcon, OrderIcon } from "@/icons/icons";
import { Stat } from "@/types";

const medicalStats: Stat[] = [
  {
    title: "Total Patients",
    percentage: "+12.40%",
    value: "2,345",
    status: "up",
    icon: CustomerIcon,
  },
  {
    title: "Appointments Today",
    percentage: "+8.40%",
    value: "234",
    status: "up",
    icon: Appointment,
  },
  {
    title: "Prescriptions Issued",
    percentage: "+20.40%",
    value: "1,234",
    status: "up",
    icon: OrderIcon,
  },
];

export default function Home(): JSX.Element {
  return (
    <div className="flex w-full h-full font-san">
      <main className="flex flex-col flex-1 gap-6 p-4">
        <Stats stats={medicalStats} />
        <PatientReport />
      </main>
      <aside className="flex flex-col gap-y-6 pt-6 pr-6 w-96">
        <MostOrdered />
        <PatientStats />
      </aside>
    </div>
  );
}
