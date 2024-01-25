import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import classes from "./style.module.css";
import Card from "../../components/Card";
import SortTable from "../../components/SortTable";

//option sort
const options = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
];

const TvShowListPage = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = useState("");
  const [API_URL, setAPI_URL] = useState("");
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const PAGE = "&page=" + page;
  const SORT = "&sort_by=" + sort;

  // fetch movie api
  const getMovies = useCallback(async () => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      // state show button show more
      setTotalPage(data.total_pages);
    } catch (error) {
      // toast.error(error.message);
    }
  }, [API_URL]);

  // change api url when sort
  useEffect(() => {
    if (sort) {
      setAPI_URL(BASE_URL + "/discover/tv?" + API_KEY + PAGE + SORT);
    } else {
      setAPI_URL(BASE_URL + "/tv/popular?" + API_KEY + PAGE);
    }
  }, [sort, PAGE, SORT]);

  useEffect(() => {
    getMovies();
  }, [API_URL, getMovies]);

  // show more handle
  const showMoreHandle = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // change title
  useEffect(() => {
    document.title = "TV Show";
  }, []);

  //  sort movie handle
  const sortMovieHandle = (selectedSort) => {
    setSort(selectedSort);
    setPage(1);
    setMovies([]);
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-lg-between align-items-center justify-content-center px-4">
        <h1>TV Show</h1>
      </div>
      <div className="d-flex flex-column flex-lg-row gap-lg-4 px-4">
        <div className="col-lg-3 col-12">
          <SortTable options={options} onClickSort={sortMovieHandle} />
        </div>
        <div
          className={`d-flex align-items-center flex-column col-lg-9 col-12`}
        >
          <div
            className={`d-flex flex-row flex-wrap gap-4 py-2 justify-content-center`}
          >
            {/* list */}
            {movies.map((movie, index) => {
              if (movie.poster_path === null) {
                return null;
              } else {
                return (
                  <div
                    key={index}
                    className={`col-4 col-md-2 col-lg-2 col-xl-2`}
                  >
                    <Card
                      type="tvshow"
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
          {page < totalPage ? (
            <button className={classes.btn_loadmore} onClick={showMoreHandle}>
              Show More
            </button>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};
export default TvShowListPage;
