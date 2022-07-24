import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pageReducer from "../../redux/pages/slice";

const reducer = combineReducers({
  page: pageReducer,
});
const store = configureStore({
  reducer: reducer,
});

export { store };
