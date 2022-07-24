import { combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "./loading/slice";

const reducer = combineReducers({
  loading: loadingReducer,
});

export default reducer;
