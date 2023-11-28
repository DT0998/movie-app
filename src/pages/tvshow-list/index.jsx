import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import classes from "./style.module.css";
import Card from "../../components/Card";
import SortTable from "../../components/SortTable";

const TvShowListPage = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [movies, setMovies] = useState([]);
  // const pageRef = useRef(page);
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const PAGE = "&page=" + page;
  const API_URL = BASE_URL + "/tv/popular?" + API_KEY + PAGE;

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

  return (
    <React.Fragment>
      <div className="d-flex justify-content-lg-between align-items-center justify-content-center">
        <h1>TV Show</h1>
      </div>
      <SortTable />
      <div className=" d-flex flex-row flex-wrap justify-content-center">
        {/* list */}
        {movies.map((movie) => (
          <Card
            key={movie.id}
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
        ))}
        {/* button show more */}
        {page < totalPage ? (
          <button className={classes.btn_loadmore} onClick={showMoreHandle}>
            Show More
          </button>
        ) : null}
      </div>
    </React.Fragment>
  );
};
export default TvShowListPage;
