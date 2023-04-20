import { Appointment } from '@/icons/icons';
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

export type Medicine = {
  name: string;
  dosage: string;
  frequency: string;
}

export type Prescription = {
  id?: number;
  date: Date;
  patientId: string;
  prescribedBy: string;
  medicines: Medicine[];
}

export type Appointment = {
  id?: number;
  date: Date;
  reason: 'Check-up' | 'Follow-up' | 'Pregnancy' | 'Emergency' | 'vaccination' | 'Mental care';
  type: 'online' | 'physical';
  patientId: string;
  doctorId: string;  
}

export type Patient = {
  id: string;
  name: string;
  profilePic: string;
  birth: Date;
  email: string;
  address: string;
  contact: string;
  healthStatus: string[];
  allergies: string[];
  appointments: Appointment[],
  medication: string;
  prescription: Prescription
}
