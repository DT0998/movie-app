import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./home/slice";

const reducer = combineReducers({
  home: homeReducer,
});

export default reducer;
