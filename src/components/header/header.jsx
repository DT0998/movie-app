import "./header.css";
import { Nav } from "../nav/nav";
import { HeaderSlider } from "./headerSlider";

import { useEffect, useState } from "react";
import axios from "axios";

export const Header = () => {
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/movie/popular?" + API_KEY;
  const IMG_ORG = "https://image.tmdb.org/t/p/original";

  // fetch movie api
  const [moviepopularbg, setMoviepopularbg] = useState([]);

  useEffect(() => {
    async function getPopular() {
      let response = await axios.get(API_URL);
      let data = response.data;
      setMoviepopularbg(data.results);
      console.log(data);
    }
    getPopular();
  }, [API_URL]);

  return (
    <div className="wrap_fluid header">
      <Nav />
      <HeaderSlider />
    </div>
  );
};
