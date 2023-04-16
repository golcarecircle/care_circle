import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '.';
import { UserX } from '@/pages/api/users';
import { Doctor } from '@/util/types';

interface MedicalRecord {
  search: string;
  userInfo: UserX | Doctor
}
const INITIAL_STATE: MedicalRecord = {
  userInfo: {
      _id: '',
      fullName: '',
      userType: '',
      sex: '',
      age: 0,
      email: '',
      password: '',
      phone: '',
      location: '',
      dob: new Date(),
      image: '',
      appointments: [],
      medicalRecords: [], 
      hospital: ''
  },
  search: '',
};
const recordsSlice = createSlice({
  name: 'records',
  reducers: {
    setMedicalRecords(state, action) {
      state.userInfo = action.payload;
    },
    setUserInfo(state,action){
      state.userInfo = action.payload;
    }
  },
  initialState: INITIAL_STATE,
});
export const { setUserInfo } = recordsSlice.actions;
export const selectUserInfo = (state: AppState) => state.recordsReducer.userInfo;
export default recordsSlice.reducer;
