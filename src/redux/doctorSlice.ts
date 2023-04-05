import { Appointment } from "@/pages/api/models/appointment.model";
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from ".";
interface DoctorRedux{
    search: string
    appointments: Appointment[]
}
const INITIAL_STATE: DoctorRedux={
    search:'',
    appointments:[]
}
const doctorSlice = createSlice({
    name:'doctor',
    initialState: INITIAL_STATE,
    reducers:{
        setAppointments(state,action){
            state.appointments=action.payload
        }
    },
})
export const {setAppointments} = doctorSlice.actions;
export const selectAppointments = (state: AppState) =>state.appointmentsReducer.appointments
export default doctorSlice.reducer