import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConsultationData {
  symptoms: string[];
  notes: string;
  medications: string[];
  tests: string[];
}

interface ConsultationState {
  data: ConsultationData;
}

const initialState: ConsultationState = {
  data: {
    symptoms: [],
    notes: "",
    medications: [],
    tests: [],
  },
};

export const consultationSlice = createSlice({
  name: "consultation",
  initialState,
  reducers: {
    setSymptoms: (state, action: PayloadAction<string[]>) => {
      state.data.symptoms = action.payload;
    },
    setNotes: (state, action: PayloadAction<string>) => {
      state.data.notes = action.payload;
    },
    setMedications: (state, action: PayloadAction<string[]>) => {
      state.data.medications = action.payload;
    },
    setTests: (state, action: PayloadAction<string[]>) => {
      state.data.tests = action.payload;
    },
  },
});

export const { setSymptoms, setNotes, setMedications, setTests } =
  consultationSlice.actions;

export default consultationSlice.reducer;
