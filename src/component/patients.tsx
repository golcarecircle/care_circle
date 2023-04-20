import { OptionsIcon } from "@/icons/icons";
import Image from "next/image";
import { useRouter } from "next/router";

interface Patient {
  id: number;
  profilePic?: string | null;
  name: string;
  email: string;
  phone: string;
  appointments: number;
  prescriptions: number;
  lastVisit: string;
}

const patients: Patient[] = [
  {
    id: 1,
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "555-1234",
    appointments: 5,
    prescriptions: 3,
    lastVisit: "2023-04-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "555-5678",
    appointments: 3,
    prescriptions: 2,
    lastVisit: "2023-04-12",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michaeljohnson@example.com",
    phone: "555-9876",
    appointments: 2,
    prescriptions: 1,
    lastVisit: "2023-04-10",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emilydavis@example.com",
    phone: "555-4321",
    appointments: 4,
    prescriptions: 0,
    lastVisit: "2023-04-09",
  },
  {
    id: 5,
    name: "William Brown",
    email: "williambrown@example.com",
    phone: "555-8765",
    appointments: 1,
    prescriptions: 0,
    lastVisit: "2023-04-07",
  },
  {
    id: 6,
    name: "Olivia Taylor",
    email: "oliviataylor@example.com",
    phone: "555-5678",
    appointments: 3,
    prescriptions: 2,
    lastVisit: "2023-04-05",
  },
  {
    id: 7,
    name: "James Anderson",
    email: "jamesanderson@example.com",
    phone: "555-9876",
    appointments: 2,
    prescriptions: 1,
    lastVisit: "2023-04-03",
  },
  {
    id: 8,
    name: "Sophia Wilson",
    email: "sophiawilson@example.com",
    phone: "555-4321",
    appointments: 4,
    prescriptions: 0,
    lastVisit: "2023-04-01",
  },
  {
    id: 9,
    name: "Daniel Jackson",
    email: "danieljackson@example.com",
    phone: "555-8765",
    appointments: 1,
    prescriptions: 0,
    lastVisit: "2023-03-29",
  },
  {
    id: 10,
    name: "Emma Thompson",
    email: "emmathompson@example.com",
    phone: "555-5678",
    appointments: 3,
    prescriptions: 2,
    lastVisit: "2023-03-27",
  },
];

export default function PatientReport() {
  const router = useRouter();

  function handlePatientClick(id: any) {
    router.push(`/doctor/patient?id=${id}`);
  }

  return (
    <div className="p-6 bg-gray-900 rounded-lg">
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-xl font-semibold leading-loose text-white">
          Patient Report
        </h2>
        <button className="flex py-3 px-4 rounded-lg border border-gray-700 gap-x-2.5">
          <OptionsIcon />
          <span className="text-sm text-white">Filter patients</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="text-sm font-semibold text-white">
              <th className="py-4 border-b border-gray-700">Avatar</th>
              <th className="py-4 border-b border-gray-700">Name</th>
              <th className="py-4 border-b border-gray-700">Email</th>
              <th className="py-4 border-b border-gray-700">Phone</th>
              <th className="py-4 border-b border-gray-700 text-right">
                Appointments
              </th>
              <th className="py-4 border-b border-gray-700 text-right">
                Prescriptions
              </th>
              <th className="py-4 border-b border-gray-700 text-right">
                Last visit
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr
                key={patient.id}
                className="text-sm text-gray-500"
                onClick={() => handlePatientClick(patient.id)}
              >
                <td className="py-4">
                  {patient.profilePic ? (
                    <Image
                      width={32}
                      height={32}
                      src={patient.profilePic}
                      alt={patient.name}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-300 text-gray-700 text-xs font-medium">
                      {patient.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </td>
                <td className="py-4">{patient.name}</td>
                <td className="py-4">{patient.email}</td>
                <td className="py-4">{patient.phone}</td>
                <td className="py-4 tabular-nums text-right">
                  {patient.appointments}
                </td>
                <td className="py-4 tabular-nums text-right">
                  {patient.prescriptions}
                </td>
                <td className="py-4 tabular-nums text-right">
                  {patient.lastVisit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
