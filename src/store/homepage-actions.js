import { getHomepageData, getHomepageDataSuccess } from "./homepage-slice";

// get movie and tvshow
export const getAllMovieAndTvShowData = () => {
  return async (dispatch) => {
    const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
    const BASE_URL = "https://api.themoviedb.org/3";
    const MOVIE_URL = "/trending/movie/day?";
    const TVSHOW_URL = "/tv/popular?";
    const MOVIELEGACY_URL = "/movie/top_rated?";
    const URLS = [MOVIE_URL, TVSHOW_URL, MOVIELEGACY_URL];
    //  loading init
    dispatch(getHomepageData());
    // fetch all data movie and tvshow
    const fetchData = async () => {
      let requests = URLS.map((url) => fetch(`${BASE_URL}${url}${API_KEY}`));
      const responses = await Promise.all(requests);
      const data = await responses.json();
      return data;
    };
    try {
      const homepageData = await fetchData();
      dispatch(getHomepageDataSuccess(homepageData));
      console.log(homepageData);
    } catch (error) {}
  };
};
// show more movie and tvshow
