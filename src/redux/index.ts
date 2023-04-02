import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import recordsReducer from './patientInfoSlice';
import appointmentsReducer from './doctorSlice';
import { createWrapper } from 'next-redux-wrapper'
export const store =()=>( configureStore({
    reducer: {
        recordsReducer,
        appointmentsReducer
    }
}));
export type AppStore = ReturnType<typeof store>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = ReturnType<AppStore['dispatch']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export const wrapper = createWrapper<AppStore>(store);