import { createSlice } from "@reduxjs/toolkit";


const applyQuery= createSlice({
    name:"applyQuery",
    initialState:{
        applyFilter: false,
    },
    reducers:{
        SetApplyFilter(state,_action){
            state.applyFilter=!(state.applyFilter)
        },
        
    }
})


export const { SetApplyFilter } = applyQuery.actions

export default applyQuery.reducer