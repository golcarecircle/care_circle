import { RootState } from "..";
import { MedicalInfo } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RemoveItemPayload {
  category: string;
  index: number;
}

interface MedicalInfoState extends MedicalInfo {
  [category: string]: string[]; // Allow dynamic property access using string keys
}

const initialState: MedicalInfoState = {
  allergies: [],
  conditions: [],
  disabilities: [],
};

const medicalInfoSlice = createSlice({
  name: "medicalInfo",
  initialState,
  reducers: {
    addAllergy: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.allergies.push(action.payload);
      }
    },
    addCondition: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.conditions.push(action.payload);
      }
    },
    addMedication: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.disabilities.push(action.payload);
      }
    },
    removeMedicalInfoItem: (
      state,
      action: PayloadAction<RemoveItemPayload>
    ) => {
      const { category, index } = action.payload;
      const categoryArray = state[category];
      if (categoryArray) {
        categoryArray.splice(index, 1);
      }
    },
  },
});

export const {
  addAllergy,
  addCondition,
  addMedication,
  removeMedicalInfoItem,
} = medicalInfoSlice.actions;

export const selectMedicalInfo = (state: RootState): MedicalInfo =>
  state.MedicalInfo;

export default medicalInfoSlice.reducer;
