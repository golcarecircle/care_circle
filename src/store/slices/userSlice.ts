import { Patient } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface PatientInfoState extends Patient {}

const initialState: PatientInfoState = {
  id: "",
  personalInfo: {
    firstName: "",
    lastName: "",
    profilePic: "",
    birth: "",
    email: "",
    address: "",
    contact: "",
  },
  medicalInfo: {
    allergies: [],
    conditions: [],
    disabilities: [],
  },
  appointments: [],
};

const patientInfoSlice = createSlice({
  name: "patientInfo",
  initialState,
  reducers: {
    setPatientInfo: (state, action) => {
      state.id = action.payload.id;
      state.personalInfo = action.payload.personalInfo;
      state.medicalInfo = action.payload.medicalInfo;
      state.appointments = action.payload.appointments;
    },
  },
});

export const { setPatientInfo } = patientInfoSlice.actions;

export const selectPatientInfo = (state: RootState) => state.patientInfo;

export default patientInfoSlice.reducer;
