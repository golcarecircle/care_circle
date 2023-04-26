import MedicalHistory from "@/component/medicalHistory";
import ProfileCard from "@/component/profile_card";
import ScheduleModal from "@/component/schedule_modal";
import { Patient } from "@/types";
import { FC, useState } from "react";

const patient: Patient = {
  id: "",
  name: "John Doe",
  profilePic:
    "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg",
  birth: new Date("1998-04-30"),
  email: "john@gmail.com",
  address: "nairobi, Kenya",
  contact: "+254 796 186 336",
  allergies: ["penicillin", "aspirin"],
  medication: "none",
  healthStatus: ["asthma", "amemia"],
  appointments: [],
  prescription: {
    id: undefined,
    date: new Date("1998-04-30"),
    patientId: "",
    prescribedBy: "",
    medicines: [
      {
        name: "Amoxixilin",
        dosage: "500mg",
        frequency: "twice a day",
      },
      {
        name: "vitamin c",
        dosage: "500mg",
        frequency: "twice a day",
      },
    ],
  },
};

interface PatientProps {}

const Patient: FC<PatientProps> = ({}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
      <div className="flex flex-row flex-1 gap-4">
        <div className="flex flex-col w-4/5">
          <ProfileCard patient={patient} />
          <MedicalHistory />
        </div>
        <div className="flex flex-col w-1/5">
          <div className="h-auto bg-gray-900 rounded-lg mb-4 p-4">
            <div className="flex flex-row justify-between ">
              <h1 className="text-gray-500 text-sm font-semibold">
                Appointments
              </h1>
              <h1 className="text-accent-green  text-xl font-semibold">+</h1>
            </div>
            <div className="flex flex-col">
              {patient.appointments.length > 0 ? (
                // Render the list of upcoming appointments
                <>
                  {patient.appointments
                    .filter(
                      (appointment) => new Date(appointment.date) > new Date()
                    )
                    .map((appointment) => (
                      <div key={appointment.id} className="flex flex-col my-2">
                        <div className="flex flex-row px-4 item-center">
                          <div className="h-2 w-2 bg-accent-green rounded-full place-self-center"></div>
                          <div className="flex flex-col ml-4">
                            <h1 className="text-white text-sm font-semibold">
                              {appointment.reason}
                            </h1>
                            <p className="text-gray-400 text-sm font-thin">
                              {appointment.date.toLocaleDateString() + " "}-
                              {" " + appointment.doctorId}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </>
              ) : (
                // Render the schedule button
                <>
                  <p className="text-gray-400 text-sm font-thin ">
                    No upcoming appointments
                  </p>
                  <button
                    className="bg-blue-500 text-white my-2 py-2 px-4 rounded-md"
                    onClick={() => handleOpenModal()}
                  >
                    Schedule
                  </button>
                  {showModal && <ScheduleModal close={handleCloseModal} />}
                </>
              )}
            </div>
          </div>

          <div className="h-auto bg-gray-900 rounded-lg p-4">
            <div className="flex flex-row justify-between py-1">
              <h1 className="text-gray-500 text-sm font-semibold">
                Current Pescription
              </h1>
              <h1 className="text-accent-green  text-xl font-semibold">...</h1>
            </div>
            {patient.prescription.medicines.map((medicine) => (
              <div key={medicine.name} className="flex flex-col my-2">
                <div className="flex flex-row px-4 item-center">
                  <div className="h-2 w-2 bg-accent-green rounded-full place-self-center"></div>
                  <div className="flex flex-col ml-4">
                    <h1 className="text-white text-sm font-semibold">
                      {medicine.name}
                    </h1>
                    <p className="text-gray-400 text-sm font-thin">
                      {medicine.dosage + " "}-{" " + medicine.frequency}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Patient;
