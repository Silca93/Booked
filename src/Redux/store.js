'use client'

import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./slices/slices";
import { contentSlice } from "./slices/apiSlice";

export const store = configureStore({
    reducer: {
        basket:basketSlice.reducer,
        content:contentSlice.reducer,

    }
})