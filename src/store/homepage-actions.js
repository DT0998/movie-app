import axios from "axios";
import { homepageAction } from "./homepage-slice";

// get movie and tvshow
export const getAllMovieAndTvShowData = () => {
  
  return async (dispatch) => {
    const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
    const BASE_URL = "https://api.themoviedb.org/3";
    const MOVIE_URL_SLIDER = "/movie/popular?";
    const MOVIE_URL = "/trending/movie/day?";
    const TVSHOW_URL = "/tv/popular?";
    const MOVIELEGACY_URL = "/movie/top_rated?";
    const COMMUNITY_URL = "/person/popular?";


    //  loading init
    // fetch all data movie and tvshow
    const fetchData = async () => {
      dispatch(homepageAction.getHomepageData({
        isLoading:false,
      }));
      // fetch api
      const fetchURL = async(url) => await axios.get(BASE_URL + url + API_KEY);
      // map api
      const HomepageURL = [
        MOVIE_URL_SLIDER,
        MOVIE_URL,
        TVSHOW_URL,
        MOVIELEGACY_URL,
        COMMUNITY_URL,
      ].map(fetchURL);
      
      let responses = await axios.all(HomepageURL);
      let movieSliderData = responses[0].data.results
      let MovieData = responses[1].data.results;
      let TvShowData = responses[2].data.results;
      let MovieLegacyData = responses[3].data.results;
      let CommunityData = responses[4].data.results;
      return { movieSliderData,MovieData, TvShowData, MovieLegacyData, CommunityData };
    };
    
  

    try {
      const homepageData = await fetchData();
      dispatch(
        homepageAction.getHomepageDataSuccess({
          isLoading: true,
          slider:homepageData.movieSliderData,
          movie: homepageData.MovieData,
          tvshow: homepageData.TvShowData,
          movielegacy: homepageData.MovieLegacyData,
          community: homepageData.CommunityData,
        })
        )
      } catch (error) {


    }
  };
};
// show more movie and tvshow
