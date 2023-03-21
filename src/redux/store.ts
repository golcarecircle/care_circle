import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { tipsSlice } from "./tipsSlice";
const makeStore = ()=>(
    configureStore({
        reducer:{
            [tipsSlice.name]: tipsSlice.reducer,
        },
        devTools: true,
    })
)
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType =void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;
export const wrapper = createWrapper<AppStore>(makeStore);