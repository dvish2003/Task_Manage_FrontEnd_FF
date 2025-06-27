
import {createSlice} from "@reduxjs/toolkit";

interface AuthSlice {
    isAuth: boolean;
}


const initialState: AuthSlice = {
    isAuth: false,
}


export const AuthSlice = createSlice({
     name :"AuthSlice",
    initialState,
    reducers:{
        log: (state) => {
            state.isAuth = true;
        },
        logOut: (state) => {
            state.isAuth = false;
        }
    }
})



export default AuthSlice.reducer;
export const {log, logOut} = AuthSlice.actions;

