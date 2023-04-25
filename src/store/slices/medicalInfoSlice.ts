import { RootState } from '..';
import { MedicalInfo } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: MedicalInfo = {
  allergies: [],
  conditions: [],
  disabilities: [],
};

const medicalInfoSlice = createSlice({
  name: 'medicalInfo',
  initialState,
  reducers: {
    addAllergy: (state, action: PayloadAction<string>) => {
      state.allergies.push(action.payload);
    },
    addCondition: (state, action: PayloadAction<string>) => {
      state.conditions.push(action.payload);
    },
    addMedication: (state, action: PayloadAction<string>) => {
      state.disabilities.push(action.payload);
    },
  },
});

export const { addAllergy, addCondition, addMedication } = medicalInfoSlice.actions;

export const selectMedicalInfo = (state: RootState) => state.MedicalInfo;

export default medicalInfoSlice.reducer;
