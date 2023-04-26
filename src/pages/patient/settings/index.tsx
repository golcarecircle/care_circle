import { FC, useState, ChangeEvent, FormEvent } from "react";

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

interface MedicalInfo {
  bloodType: string;
  allergies: string[];
  disabilities: string[];
}

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [medicalInfo, setMedicalInfo] = useState<MedicalInfo>({
    bloodType: "",
    allergies: [],
    disabilities: [],
  });

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePersonalDetail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Saving personal info:", personalInfo);
    // Send API request to save personal info
  };

  const handleMedicalInfo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Saving medical info:", medicalInfo);
    // Send API request to save medical info
  };

  const handlePasswordChange = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Changing password...");
    // Send API request to change password
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const { name, value } = event.target;
    setData((prevState: any) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="flex flex-col">
      {/* Personal Info */}
      <h1>Personal Info</h1>
      <div className="flex">
        <form onSubmit={handlePersonalDetail} className="flex-col flex">
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={personalInfo.firstName}
                onChange={(event) => handleInputChange(event, setPersonalInfo)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={personalInfo.lastName}
                onChange={(event) => handleInputChange(event, setPersonalInfo)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={personalInfo.email}
              onChange={(event) => handleInputChange(event, setPersonalInfo)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={personalInfo.phone}
              onChange={(event) => handleInputChange(event, setPersonalInfo)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={personalInfo.address}
              onChange={(event) => handleInputChange(event, setPersonalInfo)}
            />
          </div>
          <button type="submit">Save Personal Info</button>
        </form>
      </div>
      {/* Medical Info */}
      <h1>Medical Info</h1>
      <div className="flex">
        <form onSubmit={handleMedicalInfo} className="flex-col flex">
          <div className="flex flex-col">
            <label htmlFor="bloodType">Blood Type</label>
            <input
              type="text"
              name="bloodType"
              id="bloodType"
              value={medicalInfo.bloodType}
              onChange={(event) => handleInputChange(event, setMedicalInfo)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="allergies">Allergies (separated by commas)</label>
            <input
              type="text"
              name="allergies"
              id="allergies"
              value={medicalInfo.allergies.join(",")}
              onChange={(event) =>
                handleInputChange(event, (prevState: any) => ({
                  ...prevState,
                  allergies: event.target.value.split(","),
                }))
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="disabilities">
              Disabilities (separated by commas)
            </label>
            <input
              type="text"
              name="disabilities"
              id="disabilities"
              value={medicalInfo.disabilities.join(",")}
              onChange={(event) =>
                handleInputChange(event, (prevState: any) => ({
                  ...prevState,
                  disabilities: event.target.value.split(","),
                }))
              }
            />
          </div>
          <button type="submit">Save Medical Info</button>
        </form>
      </div>

      {/* Password Change */}
      <h1>Change Password</h1>
      <div className="flex">
        <form onSubmit={handlePasswordChange} className="flex-col flex">
          <div className="flex flex-col">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              id="currentPassword"
              value={currentPassword}
              onChange={(event) => setCurrentPassword(event.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <button type="submit">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
