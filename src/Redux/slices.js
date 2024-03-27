'use client'
import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice ({
    name:"test",

    initialState:{
        value:""
    },

    reducers :{

    }
})

export const {} = testSlice.actions;
export default testSlice.reducer;