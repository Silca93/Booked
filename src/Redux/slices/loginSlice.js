'use client'
import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
    name:"login",

    initialState:{
        value:{
            email:"",
            username:"",
            password:"",
            logged: false,
        }
    },

    reducers:{
        addEmail: (state, action) => {
            state.value.email = action.payload;
            console.log(state.value.email);
            
        },
        addUsername: (state, action) => {
            state.value.username = action.payload;
            console.log(state.value.username);
        },
        addPassword: (state, action) => {
            state.value.password = action.payload;
            console.log(state.value.password);
        },
        logIn: (state, action) => {
            state.value.logged = (!state.value.logged)
            console.log(state.value.logged);
        }
    }
})

export const {addEmail, addUsername, addPassword, logIn} = loginSlice.actions;
export default loginSlice.reducer;