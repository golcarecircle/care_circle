import { combineReducers, configureStore } from "@reduxjs/toolkit";

import consultationReducer from "./slices/consultationSlice";
import personalInfoReducer from "./slices/personalInfoSlice";
import medicalInfoReducer from "./slices/medicalInfoSlice";
import patientInfoReducer from "./slices/medicalInfoSlice";
import dependantsReducer from "./slices/dependantsSlice";

const rootReducer = combineReducers({
  patientInfo: patientInfoReducer,
  dependants: dependantsReducer,
  consultation: consultationReducer,
  personalInfo: personalInfoReducer,
  MedicalInfo: medicalInfoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
