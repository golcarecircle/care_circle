import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Dependant {
  id: number;
  name: string;
  age: number;
  relationship: string;
}

interface DependantsState {
  dependants: Dependant[];
}

const initialState: DependantsState = {
  dependants: [],
};

const dependantsSlice = createSlice({
  name: "dependants",
  initialState,
  reducers: {
    addDependant(state, action: PayloadAction<Dependant>) {
      state.dependants.push(action.payload);
    },
    removeDependant(state, action: PayloadAction<number>) {
      state.dependants = state.dependants.filter(
        (dependant) => dependant.id !== action.payload
      );
    },
    updateDependant(state, action: PayloadAction<Dependant>) {
      const index = state.dependants.findIndex(
        (dependant) => dependant.id === action.payload.id
      );
      if (index !== -1) {
        state.dependants[index] = action.payload;
      }
    },
  },
});

export const { addDependant, removeDependant, updateDependant } =
  dependantsSlice.actions;

export default dependantsSlice.reducer;
