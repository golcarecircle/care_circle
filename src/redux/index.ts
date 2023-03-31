import { configureStore } from "@reduxjs/toolkit";
import recordsReducer from './patientInfoSlice';
export const store =()=>(configureStore({
    reducer: {
        recordsReducer,
    }
}));
export type AppStore = ReturnType<typeof store>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = ReturnType<AppStore['dispatch']>