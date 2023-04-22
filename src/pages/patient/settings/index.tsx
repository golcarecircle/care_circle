import { FC, useState } from "react";

interface Dependent {
  id: number;
  firstName: string;
  lastName: string;
  relationship: string;
  dob: string;
}

interface MedicalInfo {
  bloodType: string;
  allergies: string[];
  medications: string[];
}

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => {
  const [dependents, setDependents] = useState<Dependent[]>([]);
  const [medicalInfo, setMedicalInfo] = useState<MedicalInfo>({
    bloodType: "",
    allergies: [],
    medications: [],
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index?: number,
    field?: string
  ) => {
    const { name, value } = event.target;
    if (index !== undefined && field) {
      const updatedDependents = [...dependents];
      updatedDependents[index][field] = value;
      setDependents(updatedDependents);
    } else {
      setMedicalInfo({
        ...medicalInfo,
        [name]:
          name === "allergies" || name === "medications"
            ? value.split(",")
            : value,
      });
    }
  };

  const addDependent = () => {
    setDependents([
      ...dependents,
      {
        id: Date.now(),
        firstName: "",
        lastName: "",
        relationship: "",
        dob: "",
      },
    ]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="flex flex-col">
      {/* Personal Info */}
      <h1>Personal Info</h1>
      <div className="flex">
        <div className="flex-col flex">
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row justify-end mt-4">
            <button className="bg-primary text-gray-100 px-4 py-1 rounded">
              Save
            </button>
          </div>
        </div>
        <hr />
        {/* Dependents */}
{/* Dependents */}
<div className="flex flex-col">
  {dependents.map((dependent, index) => (
    <div key={dependent.id}>
      <div className="flex flex-col">
        <label htmlFor={`dependentFirstName${dependent.id}-${index}`}>
          First Name
        </label>
        <input
          type="text"
          name={`dependentFirstName${dependent.id}`}
          id={`dependentFirstName${dependent.id}-${index}`}
          value={dependent.firstName}
          onChange={(e) => handleInputChange(e, index, "firstName")}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor={`dependentLastName${dependent.id}-${index}`}>
          Last Name
        </label>
        <input
          type="text"
          name={`dependentLastName${dependent.id}`}
          id={`dependentLastName${dependent.id}-${index}`}
          value={dependent.lastName}
          onChange={(e) => handleInputChange(e, index, "lastName")}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor={`dependentRelationship${dependent.id}-${index}`}>
          Relationship
        </label>
        <input
          type="text"
          name={`dependentRelationship${dependent.id}`}
          id={`dependentRelationship${dependent.id}-${index}`}
          value={dependent.relationship}
          onChange={(e) => handleInputChange(e, index, "relationship")}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor={`dependentDob${dependent.id}-${index}`}>
          Date of Birth
        </label>
        <input
          type="date"
          name={`dependentDob${dependent.id}`}
          id={`dependentDob${dependent.id}-${index}`}
          value={dependent.dob}
          onChange={(e) => handleInputChange(e, index, "dob")}
        />
      </div>
    </div>
  ))}
  <button
    className="bg-primary text-gray-100 px-4 py-1 rounded"
    onClick={addDependent}
  >
    Add Dependent
  </button>
</div>

        </div>
        <hr />
        {/* Medical Info */}
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="bloodType">Blood Type</label>
            <input
              type="text"
              name="bloodType"
              id="bloodType"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="allergies">Allergies (comma-separated)</label>
            <input
              type="text"
              name="allergies"
              id="allergies"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="medications">
              Current Medications (comma-separated)
            </label>
            <input
              type="text"
              name="medications"
              id="medications"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row justify-end mt-4">
            <button className="bg-primary text-gray-100 px-4 py-1 rounded">
              Save
            </button>
          </div>
        </div>
      </div>
  );
};

export default Settings;
