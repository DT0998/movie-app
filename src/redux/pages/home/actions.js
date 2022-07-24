import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get movie and tvshow
export const getAllMovieAndTvShow = createAsyncThunk(
  "homepage/fetchAllMovieAndTv",
  async (thunkAPI) => {
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
