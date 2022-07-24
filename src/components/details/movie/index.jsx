import axios from "axios";
import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
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
  const getTrending = useCallback(async ()=>{
    let response = await axios.get(API_URL);
    setMovie(response.data);
  },[API_URL]);

  useEffect(() => {
    getTrending();
  }, [API_URL,getTrending]);

  // change title
  useEffect(()=>{
    document.title = movie.original_title;
  })

  return (
    <React.Fragment>
      <Details
        id={id}
        type="movie"
        img_org={IMG_ORG}
        backdrop_path={movie.backdrop_path}
        img_url={IMG_URL}
        poster_path={movie.poster_path}
        alt={movie.name}
        original_title={movie.original_title}
        overview={movie.overview}
        release_date={movie.release_date}
      />
    </React.Fragment>
  );
};
