import { Appointment } from "@/icons/icons";
export type Stat = {
  title: string;
  percentage: string;
  value: string;
  status: "up" | "down";
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type Meeting = {
  id: number;
  name: string;
  imageUrl: string;
  startDatetime: string;
  endDatetime: string;
};

export type Consultation = {
  id?: number;
  date: Date;
  patientId: string;
  doctorId: string;
  diagnosis: string;
  symptoms: string[];
  medications: string[];
  tests: string[];
  status: "inProgess" | "completed";
};

export type Test = {
  name: string;
  result: string;
};

export type MedicalRecord = {
  id: string;
  patientName: string;
  date: Date;
  reason:
    | "Check-up"
    | "Follow-up"
    | "Pregnancy"
    | "Emergency"
    | "vaccination"
    | "Mental care";
  type: "online" | "physical";
  doctorName: string;
  hospital: string;
  clinicalFindings: string;
  diagnosticTests: Test[];
  medications: Medication[];
  updatedBy: string;
  updatedAt: Date;
  status: "inProgress" | "completed";
};

export type Medication = {
  name: string;
  dosage: string;
  frequency: string;
  start: Date;
  end: Date;
};

export type Medicine = {
  name: string;
  dosage: string;
  frequency: string;
};

export type Prescription = {
  id?: number;
  date: Date;
  patientId: string;
  prescribedBy: string;
  medicines: Medicine[];
};

export type Appointment = {
  id?: number;
  date: Date;
  reason:
    | "Check-up"
    | "Follow-up"
    | "Pregnancy"
    | "Emergency"
    | "vaccination"
    | "Mental care";
  type: "online" | "physical";
  patientId?: string;
  doctorId: number;
};



export type Doctor = {
  id: number;
  name: string;
  profilePic: string;
  description: string;
  rating: number;
};

export type Patient = {
  id: string;
  personalInfo:PersonalInfo;
  medicalInfo: MedicalInfo;
  appointments: Appointment[];
  medication: string;
  prescription: Prescription;
};

export type MedicalInfo = {
  allergies: string[];
  conditions: string[];
  disabilities: string[];
}


export type PersonalInfo = {
  firstName: string;
  lastName:string;
  profilePic: string;
  birth: Date;
  email: string;
  address: string;
  contact: string;
}

