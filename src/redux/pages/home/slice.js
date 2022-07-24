import { createSlice } from "@reduxjs/toolkit";
import { getAllMovieAndTvShow } from "../home/actions";
const slice = createSlice({
  name: "homepage",
  initialState: {
    slider: [],
    movie: [],
    tvshow: [],
    movielegacy: [],
    community: [],
  },
  reducers: {},
  extraReducers: {
    [getAllMovieAndTvShow.fulfilled]: (state, action) => {
      state.slider = action.payload.SliderData;
      state.movie = action.payload.MovieData;
      state.tvshow = action.payload.TvShowData;
      state.movielegacy = action.payload.MovieLegacyData;
      state.community = action.payload.CommunityData;
    },
    [getAllMovieAndTvShow.error]: () => {},
  },
});

export const homepageAction = slice.actions;
export const selectorSlider = (state) => state.page.home.slider;
export const selectorMovie = (state) => state.page.home.movie;
export const selectorTvshow = (state) => state.page.home.tvshow;
export const selectorMovieLegacy = (state) => state.page.home.movielegacy;
export const selectorCommunity = (state) => state.page.home.community;
export default slice.reducer;
