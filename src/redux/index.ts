import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import recordsReducer from './patientInfoSlice';
import appointmentsReducer from './doctorSlice';
import { createWrapper } from 'next-redux-wrapper';
import { patientSearchApi } from "./patientSearch";
export const store =()=>( configureStore({
    reducer: {
        recordsReducer,
        appointmentsReducer,
		[patientSearchApi.reducerPath]: patientSearchApi.reducer,
    },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(patientSearchApi.middleware),
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