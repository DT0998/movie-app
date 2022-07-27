import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// action login
export const login = createAsyncThunk("login", async () => {
 
});
// action logout
export const logout = createAction("logout", () => {
  return {};
});

const slice = createSlice({
  name: "login",
  initialState: {},
  reducers: {
    // add sync reducer action from this slice
  },
  extraReducers: {
    // add async and sync reducer action from other slice
    // login
    // logout
  },
});

// root config persist
const persistConfig = {
  key: "login",
  storage,
  whitelist: [],
};
export const loginActions = slice.actions;
// reducer persist
export default persistReducer(persistConfig, slice.reducer);
