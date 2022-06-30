import { configureStore } from "@reduxjs/toolkit";
import homepageSlice from "./homepage-slice";

const store = configureStore({
    reducer:{
     homepagedata:homepageSlice.reducer   
    }
})

export default store