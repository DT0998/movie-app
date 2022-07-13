import { createSlice } from "@reduxjs/toolkit";
const homeSlice = createSlice({
  name: "home",
  initialState: {
    slider: [],
    movie: [],
    tvshow: [],
    movielegacy: [],
    community: [],
    isLoading: false,
  },
  reducers: {
    getHomepageData: (state, actions) => {
      state.isLoading = actions.payload.isLoading;
    },
    getHomepageDataSuccess: (state, actions) => {
      state.isLoading = actions.payload.isLoading;
      state.slider = actions.payload.slider;
      state.movie = actions.payload.movie;
      state.tvshow = actions.payload.tvshow;
      state.movielegacy = actions.payload.movielegacy;
      state.community = actions.payload.community;
    },
  },
});

export const homepageAction = homeSlice.actions;
export const selectorSlider = (state) => state.page.home.slider;
export const selectorMovie = (state) => state.page.home.movie;
export const selectorTvshow = (state) => state.page.home.tvshow;
export const selectorMovieLegacy = (state) => state.page.home.movielegacy;
export const selectorCommunity = (state) => state.page.home.community;
export const selectorLoading = (state) => state.page.home.isLoading;
export default homeSlice.reducer;
