import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./home/slice";
import loginReducer from "./login/slice";

const reducer = combineReducers({
  home: homeReducer,
  login: loginReducer,
});

export default reducer;
