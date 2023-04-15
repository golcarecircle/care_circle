import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { type } from 'os';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

interface Patient extends User {
  id: string;
  medicalHistory: MedicalHistory
  appointment: Appointment[]
  createdAt: string;
  updatedAt: string;
}

interface Doctor extends User{
  id: string;
  hospital: Hospital;
  createdAt: string;
  updatedAt: string;
}

interface Hospital{
  id: string;
  name: string;
  address: string;
  hospitalAdmin: User
  createdAt: string;
  updatedAt: string;
}

interface Appointment {
  id: string;
  date: string;
  patient: Patient;
  doctor: Doctor;
  symptoms: Symptoms[];
  createdAt: string;
  updatedAt: string;
}

interface Symptoms {
  id: string;
  descriprion: string
}


interface Treatment {
  id: string;
  date: Date;
  time: string;
  duration: string;
  prescription: Prescription[]
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface Diagnosis {
  id: string;
  name: string;
  description: string;
  treatment: Treatment[];
  createdAt: string;
  updatedAt: string;
}

interface Consultation {
  id: string;
  date: string;
  physcian: Doctor;
  physcianNotes: string;
  labs: Labs[];
  symptoms: Symptoms[];
  diagnosis: Diagnosis[];
}

interface Labs {
  id: string;
  orderBy: Doctor;
  tests: Test[]
}

interface Test {
  id: string;
  name: string;
  results: string;
  createdAt: string;
  updatedAt: string;
}

interface MedicalHistory {
  id: string;
  userId: string;
  consultation: Consultation[];
  createdAt: string;
  updatedAt: string;
}

interface Prescription {
  id: string;
  medicineName: string;
  dosage: string;
  createdAt: string;
  updatedAt: string;
}

export type {
  User,
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
  Prescription,
};


