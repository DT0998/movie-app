import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './auth/slice';
const reducer = combineReducers({
    auth: authReducer,
});

export default reducer;
