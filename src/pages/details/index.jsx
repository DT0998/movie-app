import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classes from "./style.module.css";
import SliderCard from "../../components/SliderCard";
import Trailer from "../../components/Trailer";
import httpService from "../../services/http";

const DetailsMoviePage = (props) => {
  const { type, titleDetail } = props;
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [casts, setCasts] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";
  const API_URL = `/${type}/${id}`;
  const API_URL_TRAILER = `/${type}/${id}/videos`;
  const API_URL_CAST = `/${type}/${id}/creditsdd`;
  const API_URL_RECOMMEND = `/${type}/${id}/recommendations`;

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
      setIsLoading(true);
      const responseDetails = await httpService.get(API_URL);
      const responseGenres = await httpService.get(API_URL);
      const responseTrailer = await httpService.get(API_URL_TRAILER);
      const responseRecommend = await httpService.get(API_URL_RECOMMEND);
      const responseCast = await httpService.get(API_URL_CAST);
      if (responseDetails) {
        setMovie(responseDetails);
      }
      if (responseGenres) {
        setGenres(responseGenres.genres);
      }
      if (responseTrailer) {
        setTrailer(responseTrailer.results);
      }
      if (responseCast) {
        setCasts(responseCast.cast);
      }
      if (responseRecommend) {
        setRecommends(responseRecommend.results);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [API_URL, API_URL_CAST, API_URL_RECOMMEND, API_URL_TRAILER]);

  useEffect(() => {
    getDetailsMovie();
  }, [getDetailsMovie]);

  // change title
  useEffect(() => {
    let title;
    if (isLoading) {
      title = `${titleDetail}`;
    } else {
      title = `${titleDetail} | ${
        movie?.original_title || movie?.original_name
      }`;
    }
    document.title = title;
  }, [isLoading, movie, titleDetail]);

  const releaseTimeMovie = () => {
    if (movie.first_air_date || movie.release_date) {
      return formatDate(movie.first_air_date || movie.release_date);
    }
  };

  return (
    <React.Fragment>
      <div
        className={`${classes.details}`}
        style={{
          backgroundImage: `url(${IMG_ORG + movie.backdrop_path})`,
        }}
      >
        <div className="d-flex justify-content-center align-items-center flex-md-row flex-column py-5">
          <div className="d-flex justify-content-center align-items-center col-md-6 px-3 px-md-0">
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
          <div className={`${classes.details_content} px-3 col-md-5`}>
            <p className={classes.details_title}>
              {movie.original_title || movie.name}
            </p>
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
              Release day: {releaseTimeMovie()}
            </p>
            {/* trailer */}
            <Trailer data={trailer} />
          </div>
        </div>
      </div>
      <div className="py-3">
        {/* cast */}
        <SliderCard
          data={casts}
          type="cast"
          IMG_ORG={IMG_ORG}
          extraClass={classes.cast_container}
          title="Cast"
        />
      </div>
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
