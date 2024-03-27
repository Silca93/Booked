'use client'

import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./slices/slices";

export const store = configureStore({
    reducer: {
        basket:basketSlice.reducer,

    }
})