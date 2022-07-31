import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get movie and tvshow action
export const getAllMovieAndTvShow = createAsyncThunk(
  "homepage/fetchAllMovieAndTv",
  async () => {
    const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
    const BASE_URL = "https://api.themoviedb.org/3";
    const MOVIE_URL_SLIDER = "/movie/popular?";
    const MOVIE_URL = "/trending/movie/day?";
    const TVSHOW_URL = "/tv/popular?";
    const MOVIELEGACY_URL = "/movie/top_rated?";
    const COMMUNITY_URL = "/person/popular?";
    // fetch all data movie and tvshow
    // fetch api
    const fetchURL = async (url) => await axios.get(BASE_URL + url + API_KEY);
    // map api
    const HomepageURL = [
      MOVIE_URL_SLIDER,
      MOVIE_URL,
      TVSHOW_URL,
      MOVIELEGACY_URL,
      COMMUNITY_URL,
    ].map(fetchURL);

    let responses = await axios.all(HomepageURL);
    let SliderData = responses[0].data.results;
    let MovieData = responses[1].data.results;
    let TvShowData = responses[2].data.results;
    let MovieLegacyData = responses[3].data.results;
    let CommunityData = responses[4].data.results;
    // return data
    return {
      SliderData,
      MovieData,
      TvShowData,
      MovieLegacyData,
      CommunityData,
    };
  }
);

// slice
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
  },
});

export const homepageAction = slice.actions;
export const selectorSlider = (state) => state.page.home.slider;
export const selectorMovie = (state) => state.page.home.movie;
export const selectorTvshow = (state) => state.page.home.tvshow;
export const selectorMovieLegacy = (state) => state.page.home.movielegacy;
export const selectorCommunity = (state) => state.page.home.community;
export default slice.reducer;
