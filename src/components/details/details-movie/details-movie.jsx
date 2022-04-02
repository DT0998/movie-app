import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import Details from "../details";

export const Detailsmovie = ({ id }) => {
  const [movie, setMovie] = useState({});
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/movie/${id}?` + API_KEY;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";

  // fetch movie api
  const getTrending = async function () {
    let response = await axios.get(API_URL);
    setMovie(response.data);
  };

  useEffect(() => {
    getTrending();
    // use aos
    Aos.init();
  }, [API_URL]);

  // change title
  document.title = movie?.original_title;

  return (
    <React.Fragment>
      <Details
        id={id}
        classNameDetails="wrap_fluid details"
        img_org={IMG_ORG}
        backdrop_path={movie.backdrop_path}
        classNameDetailsImgContainer="wrap details_img"
        img_url={IMG_URL}
        poster_path={movie.poster_path}
        alt={movie.name}
        classNameDetailsImg="details_img"
        classNameDetailsContent="wrap details_content"
        classNameDetailsTitle="details_title"
        original_title={movie.original_title}
        overview={movie.overview}
        release_date={movie.release_date}
      />
    </React.Fragment>
  );
};
