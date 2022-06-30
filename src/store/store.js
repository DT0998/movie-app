import { configureStore } from "@reduxjs/toolkit";
import homepageSlice from "./homepage-slice";

const store = configureStore({
    reducer:{
     homepage:homepageSlice.reducer   
    }
})

export default store