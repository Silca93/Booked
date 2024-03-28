'use client'

import { configureStore } from "@reduxjs/toolkit";
import {basketSlice} from "./slices/slices";
import { contentSlice } from "./slices/apiSlice";
import { favSlice } from "./slices/favSlice";

export const store = configureStore({
    reducer: {
        basket:basketSlice.reducer,
        content:contentSlice.reducer,
        favourites:favSlice.reducer,
    }
})