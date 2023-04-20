import { combineReducers, configureStore } from "@reduxjs/toolkit";
import consultationReducer from "./reducers/consultationSlice";

const rootReducer = combineReducers({
  consultation: consultationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
