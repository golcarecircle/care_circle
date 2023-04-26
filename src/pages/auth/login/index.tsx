/* eslint-disable react/no-unescaped-entities */
import Logo from "@/component/logo";
import Link from "next/link";
import { FC, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthLayout from "../authlayout";

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    console.log("Logging in with email:", email, "and password:", password);
  };

  return (
    <AuthLayout>
      <div className="w-full px-8 md:px-32 lg:px-24">
        <form className="p-5 bg-white rounded-md shadow-2xl">
          <h1 className="mt-1 mb-1 text-2xl font-bold text-gray-800">
            Hello Again!
          </h1>
          <p className="mb-8 text-sm font-normal text-gray-600">Welcome Back</p>
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
              id="email"
              className="w-full pl-2 border-none outline-none "
              type="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center px-3 py-2 mb-12 border-2 rounded-2xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="w-full pl-2 border-none outline-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="block w-full py-2 mt-5 mb-2 font-semibold text-white transition-all duration-500 bg-indigo-600 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1"
          >
            Login
          </button>
          <div className="flex justify-between mt-4">
            <span className="ml-2 text-sm transition-all duration-500 cursor-pointer hover:text-blue-500 hover:-translate-y-1">
              Forgot Password ?
            </span>

            <Link
              href="/auth/register"
              className="ml-2 text-sm transition-all duration-500 cursor-pointer hover:text-blue-500 hover:-translate-y-1"
            >
              Don't have an account yet?
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
