import React from "react";
// media query hook
import useMediaQuery from "../../hooks/useMediaquery";
import Card from "../Card";
import { Link } from "react-router-dom";
import classes from "./style.module.css";

const ShowCase = (props) => {
  const { to, data, title_main, type } = props;
  // media query
  const isMobile = useMediaQuery("(min-width:320px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  let ShowCaseUI;
  /* mobile */
  if (isMobile) {
    ShowCaseUI = data.map(
      (movie, index) =>
        index < 2 && (
          <Card
            key={movie.id}
            type={type}
            title={movie.title}
            id={movie.id}
            imgUrl={IMG_URL}
            posterPath={movie.poster_path}
            originalAlt={movie.original_name}
            originalTitle={movie.original_name}
            firstAirDate={movie.first_air_date}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
          />
        )
    );
  }

  /* tablet */
  if (isTablet) {
    ShowCaseUI = data.map(
      (movie, index) =>
        index < 4 && (
          <Card
            key={movie.id}
            type={type}
            title={movie.title}
            id={movie.id}
            imgUrl={IMG_URL}
            posterPath={movie.poster_path}
            originalAlt={movie.original_name}
            originalTitle={movie.original_name}
            firstAirDate={movie.first_air_date}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
          />
        )
    );
  }

  /* desktop */
  if (isDesktop) {
    ShowCaseUI = data.map(
      (movie, index) =>
        index < 5 && (
          <Card
            key={movie.id}
            type={type}
            title={movie.title}
            id={movie.id}
            imgUrl={IMG_URL}
            posterPath={movie.poster_path}
            originalAlt={movie.original_name}
            originalTitle={movie.original_name}
            firstAirDate={movie.first_air_date}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
          />
        )
    );
  }

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between align-items-center my-3">
        <h1> {title_main}</h1>
        <Link to={to}>
          <button className={`${classes.btn_view}`}>
            <span className={classes.circle} aria-hidden="true">
              <span className={`${classes.arrow}`}></span>
            </span>
            <span className={classes.btn_text}>View More</span>
          </button>
        </Link>
      </div>
      <div className=" d-flex flex-row gap-3">{ShowCaseUI}</div>
    </React.Fragment>
  );
};

export default ShowCase;
