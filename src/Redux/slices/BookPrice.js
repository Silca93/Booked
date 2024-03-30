'use client'
import { createSlice } from "@reduxjs/toolkit"

export const priceSlice = createSlice({
    name:"price",

    initialState:{
        value:0
    },

    reducers: {
        randomPrice : (state) => {
            state.value = Math.floor(Math.random()*(20 - 5 + 1)) + 5;
        }
    }
})

export const { randomPrice } = priceSlice.actions;
export default priceSlice.reducer;