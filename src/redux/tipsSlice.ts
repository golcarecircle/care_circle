import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";
type Section={
    Title: string;
    Description? :string;
    Content: string
}
type ResponseData = {
    readonly Id: string
    Title: string;
    ImageUrl: string;
    ImageAlt: string;
    Sections: Section[]
}
export interface TipsState{
    data: ResponseData[]
}
//DEFINES THE INITIAL STATE
const INITIAL_STATE: TipsState={
    data:[]
}
//ACTUAL STATE
export const tipsSlice = createSlice({
    name: "data",
    initialState: INITIAL_STATE,
    reducers:{
        // Actions to set the data
        setDataState(state, action){
            state.data= action.payload
        }
    },  
    extraReducers: {
        [HYDRATE]: (state, action)=>{
            return{
                ...state,
                ...action.payload.data
            };
        }
    },
});
export const {setDataState} = tipsSlice.actions;
export const selectDataState = (state: AppState) =>state.data.data
export default tipsSlice.reducer;