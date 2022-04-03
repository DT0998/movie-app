import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import Details from "../details";

export const Detailstvshow = ({ id }) => {
  const [tvshow, setTvshow] = useState({});
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/tv/${id}?` + API_KEY;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";

  // fetch movie api
  const getTrending = async function () {
    let response = await axios.get(API_URL);
    setTvshow(response.data);
  };
  useEffect(() => {
    getTrending();
    // use aos
    Aos.init();
  }, [API_URL]);

  // change title
  document.title = tvshow?.name;

  return (
    <React.Fragment>
      <Details
        id={id}
        type="tv"
        classNameDetails="wrap_fluid details"
        img_org={IMG_ORG}
        backdrop_path={tvshow.backdrop_path}
        classNameDetailsImgContainer="wrap details_img"
        img_url={IMG_URL}
        poster_path={tvshow.poster_path}
        alt={tvshow.name}
        classNameDetailsImg="details_img"
        classNameDetailsContent="wrap details_content"
        classNameDetailsTitle="details_title"
        classNameDay="release_day"
        original_title={tvshow.name}
        overview={tvshow.overview}
        first_air_date={tvshow.first_air_date}
      />
    </React.Fragment>
  );
};
