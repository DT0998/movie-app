import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pageReducer from "../../redux/pages/slice";
import featureReducer from "../../redux/features/slice";

const reducer = combineReducers({
  page: pageReducer,
  features: featureReducer,
});
const store = configureStore({
  reducer: reducer,
});

export { store };
