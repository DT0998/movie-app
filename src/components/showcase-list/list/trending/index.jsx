/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import classes from "../../showcase-list-card.module.css";
import { ShowcaseListCard } from "../../showcase-list-card";
import ButtonShowMore from "../../../Button/ButtonSquare";
import ListTitle from "../../list-title";
import axios from "axios";
import SortTable from "../../../sort-table";

export const Trendinglist = () => {
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState();
  const [movietrending, setMovietrending] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const PAGE = "&page=" + page;
  const BASE_URL = "https://api.themoviedb.org/3";
  // const SORT_TYPE = "&sort_by=popularity.desc";
  const API_URL = BASE_URL + "/trending/movie/week?" + API_KEY + PAGE;
  // const API_SORT = BASE_URL + "/discover/movie?" + API_KEY + SORT_TYPE;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  // fetch movie api
  const getTrending = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setMovietrending([...movietrending, ...data.results]);
    setTotalpage(data.total_pages);
  };
  useEffect(() => {
    getTrending();
  }, [API_URL]);

  // show more
  const showMoreHandle = () => {
    setPage(page + 1);
  };
  // search release_date
  // const handlesortReleasedate = async function () {
  //   let response = await axios.get(`${API_SORT}`);
  //   let data = response.data;
  // };

  return (
    <div className={classes.list}>
      <div>
        <div>
          <div>
            <ListTitle titlemain="Trending" />
          </div>
        </div>
        <div className="d-flex">
          <div>
            <SortTable />
          </div>
          <div>
            <div className=" d-flex flex-row flex-wrap justify-content-center">
              {movietrending.map((movie) => (
                <ShowcaseListCard
                  key={movie.id}
                  type="movie"
                  id={movie.id}
                  img_url={IMG_URL}
                  poster_path={movie.poster_path}
                  originalalt={movie.original_name}
                  originaltitle={movie.original_name}
                  title={movie.title}
                  first_air_date={movie.first_air_date}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average}
                />
              ))}
              {page < totalpage ? (
                <ButtonShowMore onClick={showMoreHandle} type="showMore">
                  Show More
                </ButtonShowMore>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
