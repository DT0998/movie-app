import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import classes from "./style.module.css";
import Card from "../../components/Card";
import SortTable from "../../components/SortTable";
import httpService from "../../services/http";

//option sort
const options = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
];

const MovieLegacyListPage = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [movies, setMovies] = useState([]);
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const PAGE = "&page=" + page;
  const API_URL = "/movie/top_rated?" + PAGE;
  const [hasError, setHasError] = useState(false);

  // fetch movie api
  const getMovies = useCallback(async () => {
    try {
      const data = await httpService.get(API_URL);
      if (data) {
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
      }
      // state show button show more
      setTotalPage(data.total_pages);
      setHasError(false);
    } catch (error) {
      setHasError(true);
      toast.error("Failed to fetch data. Please try again.");
    }
  }, [API_URL]);

  useEffect(() => {
    getMovies();
  }, [API_URL, getMovies]);

  // show more handle
  const showMoreHandle = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // change title
  useEffect(() => {
    document.title = "Movies Legacy";
  }, []);

  return (
    <React.Fragment>
      <div className="d-flex justify-content-lg-between align-items-center justify-content-center px-4">
        <h1>Movies Legacy</h1>
      </div>
      <div className="d-flex flex-column flex-lg-row gap-lg-4 px-4">
        <div className="col-lg-3 col-12">
          <SortTable options={options} />
        </div>
        <div
          className={`d-flex align-items-center flex-column col-lg-9 col-12`}
        >
          <div
            className={`d-flex flex-row flex-wrap gap-4 py-2 justify-content-center`}
          >
            {/* error */}
            {hasError && (
              <div className="col-12 text-center p-2">
                <h1>Failed to fetch data. Please try again.</h1>
              </div>
            )}
            {/* list */}
            {!hasError &&
              movies.map((movie, index) => {
                if (movie.poster_path === null) {
                  return null;
                } else {
                  return (
                    <div
                      key={index}
                      className={`col-4 col-md-2 col-lg-2 col-xl-2`}
                    >
                      <Card
                        type="movie"
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
                    </div>
                  );
                }
              })}
          </div>
          {/* button show more */}
          {!hasError && page < totalPage ? (
            <button className={classes.btn_loadmore} onClick={showMoreHandle}>
              Show More
            </button>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};
export default MovieLegacyListPage;
