import { createSlice} from "@reduxjs/toolkit";
import { getAllMovieAndTvShow } from "../../pages/home/actions";
const slice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getAllMovieAndTvShow.pending]: (state) => {
      state.isLoading = false;
    },
    [getAllMovieAndTvShow.fulfilled]: (state) => {
      state.isLoading = true;
    },
  },
});

export const selectorLoading = (state) => state.features.loading.slider;
export default slice.reducer;
