import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import httpService from "../../../services/http";

// get movie and tvshow action
export const getAllMovieAndTvShow = createAsyncThunk(
  "homepage/fetchAllMovieAndTv",
  async () => {
    const MOVIE_URL_SLIDER = "/movie/popular?";
    const MOVIE_URL = "/trending/movie/day?";
    const TVSHOW_URL = "/tv/popular?";
    const MOVIE_LEGACY_URL = "/movie/top_rated?";
    const COMMUNITY_URL = "/person/popular?";
    // fetch all data movie and tvshow
    // fetch api
    const fetchMultiURL = async (url) => await httpService.get(url);
    // map api
    const HomepageURL = [
      MOVIE_URL_SLIDER,
      MOVIE_URL,
      TVSHOW_URL,
      MOVIE_LEGACY_URL,
      COMMUNITY_URL,
    ].map(fetchMultiURL);

    const responses = await httpService.all(HomepageURL);
    let SliderData = responses[0].results;
    let MovieData = responses[1].results;
    let TvShowData = responses[2].results;
    let MovieLegacyData = responses[3].results;
    let CommunityData = responses[4].results;
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
    movieLegacy: [],
    community: [],
  },
  reducers: {},
  extraReducers: {
    [getAllMovieAndTvShow.fulfilled]: (state, action) => {
      state.slider = action.payload.SliderData;
      state.movie = action.payload.MovieData;
      state.tvshow = action.payload.TvShowData;
      state.movieLegacy = action.payload.MovieLegacyData;
      state.community = action.payload.CommunityData;
    },
  },
});

const persistConfig = {
  key: "homepage",
  storage,
  whitelist: [],
};

export const homepageActions = slice.actions;
export const selectorSlider = (state) => state.page.home.slider;
export const selectorMovie = (state) => state.page.home.movie;
export const selectorTvshow = (state) => state.page.home.tvshow;
export const selectorMovieLegacy = (state) => state.page.home.movieLegacy;
export const selectorCommunity = (state) => state.page.home.community;
export default persistReducer(persistConfig, slice.reducer);
