import { createSlice } from '@reduxjs/toolkit';
import { IReport } from '../pages/api/models/report.model';
import { AppState } from '.';
interface MedicalRecord {
  search: string;
  records: IReport[];
}
const INITIAL_STATE: MedicalRecord = {
  records: [],
  search: '',
};
const recordsSlice = createSlice({
  name: 'records',
  reducers: {
    setMedicalRecords(state, action) {
      state.records = action.payload;
    },
  },
  initialState: INITIAL_STATE,
});
export const { setMedicalRecords } = recordsSlice.actions;
export const selectMedicalRecords = (state: AppState) =>
  state.recordsReducer.records;
export default recordsSlice.reducer;
