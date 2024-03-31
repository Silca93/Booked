'use client'
import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice ({
    name:"favourites",

    initialState:{
        value:[]
    },

    reducers :{
        addFav: (state, action) => {
            state.value.push(action.payload);
            
        },

        removeFav: (state, action) => {
            const itemIndex = state.value.findIndex(book => book.id === action.payload); 
            if (itemIndex !== -1) {
            state.value.splice(itemIndex, 1); 
            }   

        }
    }

    
})

export const {addFav, removeFav} = favSlice.actions;
export default favSlice.reducer;