import { configureStore } from "@reduxjs/toolkit";

import navbarReducer from './navbar_Navigation';

const store = configureStore({
    reducer: {navbar: navbarReducer,}
})


export default store;
