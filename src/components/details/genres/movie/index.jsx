/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import classes from "../genres.module.css";

function GenresMovie({ id }) {
  const [genres, setGenres] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/movie/${id}?` + API_KEY;
  // fetch movie api
  const getGenres = async function () {
    let response = await axios.get(API_URL);
    setGenres(response.data.genres);
  };

  useEffect(() => {
    getGenres();
  }, [API_URL]);
  return (
    <ul className="d-flex flex-wrap">
      {genres.map((genre) => (
        <li className={classes.genres} key={genre.id}>
          {genre.name}
        </li>
      ))}
    </ul>
  );
}

export default GenresMovie;
