import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { login, logout } from "../../pages/login/slice";

const slice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    // add sync reducer action from this slice
  },
  extraReducers: {
    // add async and sync reducer action from other slice
    // login
    [login.fulfilled]: (state, action) => {
    },
    // logout
    [logout]: (state) => {
      state.token = null;
    },
  },
});
const persistConfig = {
  key: "auth",
  storage,
  whilelist: ["token"],
};
export const authActions = slice.actions;
export default persistReducer(persistConfig, slice.reducer);
