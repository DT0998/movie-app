import "./login-quotes.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Loginquotes = () => {
  const [loginquotes, setLoginquotes] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/trending/all/day?" + API_KEY;
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";
  // fetch movie api
  const getQuotes = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setLoginquotes(data.results);
  };
  useEffect(() => {
    getQuotes();
  }, [API_URL]);

  return (
    <div>
      {loginquotes.map(
        (image, index) =>
          index < 1 && (
            <div
              style={{
                backgroundImage: `url(${IMG_ORG + image.backdrop_path})`,
              }}
              className="login_img"
              key={image.id}
            ></div>
          )
      )}
    </div>
  );
};
