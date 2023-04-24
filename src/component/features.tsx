import { FC } from "react";
import { FaNotesMedical } from "react-icons/fa";
import { MdOutlineSchedule, MdOutlineSecurity } from "react-icons/md";
import { HiBellAlert } from "react-icons/hi2";
import { BsVirus } from "react-icons/bs";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <FaNotesMedical className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" />
    ),
    title: "Electronic health records (EHRs)",
    description:
      "Our centralized health records system ensures that patient data is secure, confidential, and easily accessible to healthcare providers, allowing for personalized and effective treatment plans.",
  },
  {
    icon: (
      <MdOutlineSchedule className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" />
    ),
    title: "Appointment scheduling",
    description:
      "Our Power Virtual Agents feature makes it easy for patients to schedule appointments with healthcare providers, reducing wait times and improving patient satisfactionPatients can easily schedule appointments with their healthcare providers, reducing wait times and improving access to care.",
  },
  {
    icon: (
      <HiBellAlert className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" />
    ),
    title: "Medication reminders",
    description:
      "Patients can receive reminders about their medication schedules, reducing the risk of missed doses and improving health outcomes.",
  },
  {
    icon: (
      <BsVirus className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" />
    ),
    title: "Outbreak detection",
    description:
      "CareCircle can use advanced analytics and machine learning algorithms to detect outbreaks and other public health threats, enabling healthcare providers to respond quickly and effectively.",
  },
  {
    icon: (
      <MdOutlineSecurity className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" />
    ),
    title: "Data security",
    description:
      "CareCircle prioritizes data security, ensuring that patient information is protected at all times.",
  },
];

interface FeaturesProps {}

const Features: FC<FeaturesProps> = ({}) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            Built to ease health care
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            At CareCircle we offer a range of benefits for patients, healthcare
            providers, and administrators. Here are some key features and
            benefits:
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
