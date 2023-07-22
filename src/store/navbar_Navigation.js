import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tradein: {}
};

const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        tradein(state){

        }
    }
})

export const navbarActions = navbarSlice.actions;

export default navbarSlice.reducer;

