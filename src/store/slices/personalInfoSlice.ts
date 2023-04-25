import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface PersonalInfoState {
  avatar: File | null;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
}

const initialState: PersonalInfoState = {
  avatar: null,
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  dob: "",
  gender: "",
};

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setDob: (state, action) => {
      state.dob = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const {
  setAvatar,
  setFirstName,
  setLastName,
  setPhone,
  setEmail,
  setDob,
  setGender,
} = personalInfoSlice.actions;

export const selectPersonalInfo = (state: RootState) => state.personalInfo;

export default personalInfoSlice.reducer;
