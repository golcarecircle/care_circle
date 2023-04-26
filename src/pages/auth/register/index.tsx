/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { useState } from "react";
import { FaLock, FaPhone, FaUserAlt } from "react-icons/fa";
import AuthLayout from "../authlayout";
import { useRouter } from "next/router";

interface RegisterProps {}

const Register = ({}: RegisterProps) => {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log(
        "Submitting registration with:",
        {
          firstName,
          lastName,
          email,
          password,
        },
        // assuming registration is successful
        router.push("/auth/complete/")
      );
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <AuthLayout>
      <div className="w-full px-8 md:px-32 lg:px-24">
        <form
          onSubmit={handleSubmit}
          className="p-5 bg-white rounded-md shadow-2xl"
        >
          <h1 className="mt-1 mb-1 text-2xl font-bold text-gray-800">
            We glad you have choosen us
          </h1>
          <p className="mb-8 text-sm font-normal text-gray-600">
            Please fill in the form to create an account
          </p>
          {error && (
            <div
              className="relative px-4 py-3 my-2 bg-red-100 border border-red-400 rounded mytext-red-700"
              role="alert"
            >
              <strong className="font-bold">{error}</strong>
            </div>
          )}

          <div className="flex w-full gap-2 mb-2">
            <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
              <FaUserAlt className="w-5 h-5 text-gray-400 fill-current" />
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
            <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
              <FaUserAlt className="w-5 h-5 text-gray-400 fill-current" />

              <input
                id="lastName"
                className="w-full pl-2 border-none outline-none "
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center px-3 py-2 mb-2 border-2 rounded-2xl">
            <FaPhone className="w-5 h-5 text-gray-400 fill-current" />

            <input
              id="phone"
              className="w-full pl-2 border-none outline-none "
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex items-center px-3 py-2 mb-2 border-2 rounded-2xl">
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
              id="email"
              className="w-full pl-2 border-none outline-none "
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-full gap-2 mb-2">
            <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
              <FaLock className="w-5 h-5 text-gray-400 fill-current" />

              <input
                id="password"
                className="w-full pl-2 border-none outline-none "
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
              <FaLock className="w-5 h-5 text-gray-400 fill-current" />

              <input
                id="confirmPassword"
                className="w-full pl-2 border-none outline-none "
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="block w-full py-2 mt-5 mb-2 font-semibold text-white transition-all duration-500 bg-primary rounded-2xl hover:bg-primary hover:-translate-y-1"
          >
            Register
          </button>
          <div className="flex justify-between mt-4">
            <Link
              href="/auth/login"
              className="ml-2 text-sm transition-all duration-500 cursor-pointer hover:text-blue-500 hover:-translate-y-1"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
