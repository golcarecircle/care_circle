import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


type Patient = {
  id: string;
  name: string;
  profilePic: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
  medicalHistory?: MedicalHistory[];
  appointment?: Appointment[];
  createdAt?: Date;
  updatedAt?: Date;
}


type Doctor = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  hospital: Hospital;
  createdAt: string;
  updatedAt: string;
}

type Hospital = {
  id: string;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

type Appointment = {
  id: string;
  doctorId: string;
  patientId: string;
  patientName: string;
  type: string;
  date: string;
  reason?: string;
  status?: "scheduled" | "canceled" | "completed";
  notes?: string;
}


type Symptoms = {
  id: string;
  descriprion: string
}


type Treatment = {
  id: string;
  date: Date;
  time: string;
  duration: string;
  prescription: Prescription[]
  description: string;
  createdAt: string;
  updatedAt: string;
}

type Diagnosis = {
  id: string;
  name: string;
  description: string;
  treatment: Treatment[];
  createdAt: string;
  updatedAt: string;
}

type Consultation = {
  id: string;
  date: string;
  physcian: Doctor;
  physcianNotes: string;
  labs: Labs[];
  symptoms: Symptoms[];
  diagnosis: Diagnosis[];
}

type Labs = {
  id: string;
  orderBy: Doctor;
  tests: Test[]
}

type Test = {
  id: string;
  name: string;
  results: string;
  createdAt: string;
  updatedAt: string;
}

type MedicalHistory = {
  id: string;
  userId: string;
  consultation: Consultation[];
  createdAt: string;
  updatedAt: string;
}

type Prescription = {
  id: string;
  medicineName: string;
  dosage: string;
  createdAt: string;
  updatedAt: string;
}

export type {
  Patient,
  Doctor,
  Hospital,
  Appointment,
  Symptoms,
  Treatment,
  Diagnosis,
  Consultation,
  Labs,
  Test,
  MedicalHistory,
  Prescription
}


