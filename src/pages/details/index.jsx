import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classes from "./style.module.css";
import SliderCard from "../../components/SliderCard";
import Trailer from "../../components/Trailer";

const DetailsMoviePage = (props) => {
  const { type } = props;
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [casts, setCasts] = useState([]);
  const [recommends, setRecommends] = useState([]);

  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";
  const API_URL = BASE_URL + `/${type}/${id}?` + API_KEY;
  const API_URL_TRAILER = BASE_URL + `/${type}/${id}/videos?` + API_KEY;
  const API_URL_CAST = BASE_URL + `/${type}/${id}/credits?` + API_KEY;
  const API_URL_RECOMMEND =
    BASE_URL + `/${type}/${id}/recommendations?` + API_KEY;

  // format date
  const formatDate = (date) => {
    const [dateStr] = new Date(date)
      .toLocaleString("default", {
        month: "short",
        year: "numeric",
        day: "numeric",
      })
      .split("T");
    return dateStr;
  };

  // fetch movie api
  const getDetailsMovie = useCallback(async () => {
    try {
      const responseDetails = await axios.get(API_URL);
      const responseGenres = await axios.get(API_URL);
      const responseTrailer = await axios.get(API_URL_TRAILER);
      const responseRecommend = await axios.get(API_URL_RECOMMEND);
      const responseCast = await axios.get(API_URL_CAST);
      setMovie(responseDetails.data);
      setGenres(responseGenres.data.genres);
      setTrailer(responseTrailer.data.results);
      setCasts(responseCast.data.cast);
      setRecommends(responseRecommend.data.results);
    } catch (error) {
      toast.error(error.message);
    }
  }, [API_URL, API_URL_CAST, API_URL_RECOMMEND, API_URL_TRAILER]);

  useEffect(() => {
    getDetailsMovie();
  }, [getDetailsMovie]);

  // change title
  useEffect(() => {
    document.title = movie.original_title || movie.original_name;
  });

  return (
    <React.Fragment>
      <div
        className={`${classes.details}`}
        style={{
          backgroundImage: `url(${IMG_ORG + movie.backdrop_path})`,
        }}
      >
        <div>
          <div className="d-flex justify-content-center align-items-center flex-md-row flex-column">
            <div className="d-flex justify-content-center align-items-center">
              <LazyLoadImage
                src={`${IMG_URL + movie.poster_path}`}
                alt={movie.name}
                className={classes.details_img}
                effect="blur"
                threshold={100}
                delayMethod="debounce"
                delayTime={300}
                placeholderSrc={`${IMG_URL + movie.poster_path}`}
              />
            </div>
            <div>
              <div className={`${classes.details_content}`}>
                <p className={classes.details_title}>{movie.original_title}</p>
                <p>{movie.overview}</p>
                {/* genres */}
                <ul className="d-flex flex-wrap">
                  {genres.map((genre) => (
                    <li className={classes.genres} key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
                <p className={classes.release_day}>
                  Release day:{" "}
                  {formatDate(movie.first_air_date || movie.release_date)}
                </p>
              </div>
              {/* trailer */}
              <Trailer data={trailer} />
            </div>
          </div>
        </div>
      </div>
      {/* cast */}
      <SliderCard
        data={casts}
        type="cast"
        IMG_ORG={IMG_ORG}
        extraClass={classes.cast_container}
        title="Cast"
      />
      {/* recommend */}
      <SliderCard
        data={recommends}
        type={type}
        IMG_ORG={IMG_ORG}
        extraClass={classes.recommend_container}
        title="Recommendations"
      />
    </React.Fragment>
  );
};
export default DetailsMoviePage;
