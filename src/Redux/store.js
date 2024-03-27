'use client'

import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "./slices";

export const store = ({
    reducer: {
        test:testSlice.reducer,

    }
})