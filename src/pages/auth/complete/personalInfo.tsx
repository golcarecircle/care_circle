import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setAvatar,
  setFirstName,
  setLastName,
  setPhone,
  setEmail,
  setDob,
  setGender,
  selectPersonalInfo,
} from "../../../store/slices/personalInfoSlice";
import { FaUserAlt, FaPhone, FaCalendar, FaGenderless } from "react-icons/fa";

interface PersonalInfoProps {
  next: () => void;
}

const PersonalInfo: FC<PersonalInfoProps> = ({ next }) => {
  const dispatch = useDispatch();
  const personalInfo = useSelector(selectPersonalInfo);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      dispatch(setAvatar(e.target.files[0]));
    }
  };

  const handlePersonalInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(personalInfo);
    next();
  };

  return (
    <form
      onSubmit={handlePersonalInfo}
      className="p-4 mt-6 mb-0 space-y-4 rounded-lg shadow-lg sm:p-6 lg:p-8"
    >
      <p className="text-lg font-medium text-center">Complete Registration</p>

      <div className="flex justify-center item-center">
        {personalInfo.avatar ? (
          <img
            src={URL.createObjectURL(personalInfo.avatar)}
            alt="Avatar"
            className="w-16 h-16 rounded-full"
          />
        ) : (
          <div className="flex justify-center w-16 h-16 rounded-full bg-primary item-center">
            g
          </div>
        )}
      </div>

      <div>
        <input type="file" onChange={handleAvatarChange} />
      </div>

      <div className="flex w-full gap-2 mb-2">
        <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
          <FaUserAlt className="w-5 h-5 text-gray-400 fill-current" />
          <input
            id="firstName"
            className="w-full pl-2 border-none outline-none "
            type="text"
            name="firstName"
            placeholder="First Name"
            value={personalInfo.firstName}
            onChange={(e) => dispatch(setFirstName(e.target.value))}
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
            value={personalInfo.lastName}
            onChange={(e) => dispatch(setLastName(e.target.value))}
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
          value={personalInfo.phone}
          onChange={(e) => dispatch(setPhone(e.target.value))}
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
          value={personalInfo.email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
      </div>
      <div className="flex w-full gap-2 mb-2">
        <div className="flex items-center w-full px-3 py-2 mb-2 border-2 rounded-2xl">
          <FaCalendar className="w-5 h-5 text-gray-400 fill-current" />

          <input
            id="DOB"
            className="w-full pl-2 border-none outline-none "
            type="date"
            name="dob"
            placeholder="dob"
            value={personalInfo.dob}
            onChange={(e) => dispatch(setDob(e.target.value))}
          />
        </div>
        <div className="flex items-center w-full px-3 py-2 mb-2 border-2 rounded-2xl">
          <FaGenderless />
          <select
            name="gender"
            id="gender"
            title="gender"
            value={personalInfo.gender}
            onChange={(e) => dispatch(setGender(e.target.value))}
          >
            <option value="">Select your gende</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="block px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
        >
          save
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
