import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import classes from "./style.module.css";
import SortTable from "../../components/sort-table";
import Card from "../../components/Card";

const MovieListPage = (props) => {
  const { type, title } = props;
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [movies, setMovies] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const PAGE = "&page=" + page;
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + type + API_KEY + PAGE;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  // fetch movie api
  const getMovies = async () => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      setMovies([...movies, ...data.results]);
      setTotalPage(data.total_pages);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getMovies();
  }, [API_URL]);

  // show more handle
  const showMoreHandle = () => {
    setPage(page + 1);
  };

  // change title
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <React.Fragment>
      <div className="d-flex justify-content-lg-between align-items-center justify-content-center">
        <h1>{title}</h1>
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
export default MovieListPage;
