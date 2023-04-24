import { useState } from "react";
import AuthLayout from "../authlayout";

interface RegisterProps {}

const Register = ({}: RegisterProps) => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting registration with:", {
      firstName,
      lastName,
      email,
      password,
    });
  };

  return (
    <AuthLayout>
      <div className="w-full px-8 md:px-32 lg:px-24">
        <form className="p-5 bg-white rounded-md shadow-2xl">
          <h1 className="mt-1 mb-1 text-2xl font-bold text-gray-800">
            We glad you have choosen us
          </h1>
          <p className="mb-8 text-sm font-normal text-gray-600">
            Please fill in the form to create an account
          </p>
          <div className="flex items-center px-3 py-2 mb-8 border-2 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              id="firstName"
              className="w-full pl-2 border-none outline-none "
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
