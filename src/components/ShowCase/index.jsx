import React from "react";
// media query hook
import useMediaQuery from "../../utility/hooks/MediaQuery/useMediaquery";
import Card from "../Card";
import { Link } from "react-router-dom";
import classes from "./style.module.css";

const ShowCase = (props) => {
  const { to, data, titleMain, type, imgUrl } = props;
  // media query
  const isMobile = useMediaQuery("(min-width:320px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");

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
            imgUrl={imgUrl}
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
            imgUrl={imgUrl}
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
            imgUrl={imgUrl}
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
      <div className="d-flex justify-content-between align-items-center my-3 px-3">
        <h1> {titleMain}</h1>
        <Link to={to}>
          <button className={`${classes.btn_view}`}>
            <span className={classes.circle} aria-hidden="true">
              <span className={`${classes.arrow}`}></span>
            </span>
            <span className={classes.btn_text}>View More</span>
          </button>
        </Link>
      </div>
      <div className=" d-flex flex-row gap-3 px-3">{ShowCaseUI}</div>
    </React.Fragment>
  );
};

export default ShowCase;
