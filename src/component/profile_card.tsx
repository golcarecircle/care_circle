import { FC } from "react";
import Image from "next/image";
import { Patient } from "@/types";

interface ProfileCardProps {
  patient: Patient;
}

const ProfileCard: FC<ProfileCardProps> = ({ patient }) => {
  function formatDate(date: Date): string {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  return (
    <section className="w-full  flex items-center py-4 h-30">
      <div className="flex bg-gray-900 p-4 h-full rounded-lg w-8/12">
        <div className="relative flex justify-center items-center h-20 w-20 ">
          <Image
            src={patient.profilePic}
            alt={"pic"}
            fill
            className="rounded-full w-full"
          />
        </div>
        <div className="flex flex-col ml-4">
          <h1 className="text-white text-xl font-semibold mb-1">John Doe</h1>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col">
              <div className="flex">
                <h1 className="text-gray-400 text-sm mb-1">Birth:</h1>
                <h1 className="text-white text-sm ml-2">
                  {formatDate(patient.birth).toString()}
                </h1>
              </div>
              <div className="flex">
                <h1 className="text-gray-400 text-sm">Email:</h1>
                <h1 className="text-white text-sm ml-2">{patient.email}</h1>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <h1 className="text-gray-400 text-sm mb-1">Adress:</h1>
                <h1 className="text-white text-sm ml-2">{patient.address}</h1>
              </div>
              <div className="flex">
                <h1 className="text-gray-400 text-sm">Contact:</h1>
                <h1 className="text-white text-sm ml-2">{patient.contact}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-primary p-4 ml-4 h-full rounded-lg w-4/12">
        <p className="text-gray-100 text-sm font-semibold mb-1">
          Blood Type: <span className="text-white">O-</span>
        </p>
        <p className="text-gray-100 text-sm font-semibold mb-1">
          Health Status:{" "}
          <span>
            {patient.healthStatus.map((status) => (
              <span key={status} className="text-white text-sm">
                {status},
              </span>
            ))}
          </span>
        </p>
        <p className="text-gray-100 text-md font-semibold">
          Allergies:{" "}
          <span>
            {patient.allergies.map((allergy) => (
              <span key={allergy} className="text-white text-sm">
                {allergy},
              </span>
            ))}
          </span>
        </p>
      </div>
    </section>
  );
};

export default ProfileCard;
