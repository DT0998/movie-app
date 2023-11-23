/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Details from "../details";

export const Detailstvshow = (props) => {
  const { id } = props;
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
  // change title
  useEffect(() => {
    document.title = tvshow.name;
  });
  useEffect(() => {
    getTrending();
  }, [API_URL]);

  return (
    <React.Fragment>
      <Details
        id={id}
        type="tvshow"
        img_org={IMG_ORG}
        backdrop_path={tvshow.backdrop_path}
        img_url={IMG_URL}
        poster_path={tvshow.poster_path}
        alt={tvshow.name}
        original_title={tvshow.name}
        overview={tvshow.overview}
        first_air_date={tvshow.first_air_date}
      />
    </React.Fragment>
  );
};
