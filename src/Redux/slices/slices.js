'use client'
import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice ({
    name:"basket",

    initialState:{
        value:[]
    },

    reducers :{
        addBasket: (state, action) => {
            state.value.push(action.payload);
            console.log(state.value.length);
        },

        removeBasket: (state,action) => {
            const itemIndex = state.value.findIndex(book => book.id === action.payload); 
            if (itemIndex !== -1) {
              state.value.splice(itemIndex, 1); 
            }   

        }
    }

    
})

export const {addBasket, removeBasket} = basketSlice.actions;
export default basketSlice.reducer;