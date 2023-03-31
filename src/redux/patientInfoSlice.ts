import { createSlice } from "@reduxjs/toolkit";
import { IReport } from '../pages/api/models/report.model';
import { PayloadAction } from "@reduxjs/toolkit";

interface MedicalRecord{
    search:string
    records: IReport[]
}
const INITIAL_STATE: MedicalRecord = {
    records:[],
    search: ''
}

const recordsSlice = createSlice({
    name:'records',
    reducers:{
        setMedicalRecords(state,action){
            //read from database and set the records
            state.records = action.payload
        }
    },
    initialState: INITIAL_STATE
})
export const {setMedicalRecords} = recordsSlice.actions
export default recordsSlice.reducer;