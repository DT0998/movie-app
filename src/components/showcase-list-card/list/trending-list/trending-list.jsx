import { Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

import { Buttonsquare } from "../../../buttons/button-square/button-square";
import SortTable from "../../../sortTable/sortTable";
import ListTitle from "../../list-title";
import classes from "../../card.module.css";
import { Cards } from "../../card";

export const Trendinglist = () => {
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState();
  const [movietrending, setMovietrending] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const PAGE = "&page=" + page;
  const BASE_URL = "https://api.themoviedb.org/3";
  const SORT_TYPE = "&sort_by=popularity.desc";
  const API_URL = BASE_URL + "/trending/movie/week?" + API_KEY + PAGE;
  const API_SORT = BASE_URL + "/discover/movie?" + API_KEY + SORT_TYPE;
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
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <ListTitle classNameTitle="title_content" titlemain="Trending" />
            </div>
          </Col>
        </Row>
        <Row className="d-flex">
          <Col xs={12} md={4} lg={3}>
            <SortTable />
          </Col>
          <Col xs={12} md={8} lg={9}>
            <div
              className=" d-flex flex-row flex-wrap justify-content-center"
            >
              {movietrending.map((movie) => (
                <Cards
                  key={movie.id}
                  type="movie"
                  id={movie.id}
                  img_url={IMG_URL}
                  poster_path={movie.poster_path}
                  originalalt={movie.original_name}
                  classNameImg="img_showcase card-img-top"
                  classNameCardBody="card-body card_showcase"
                  classNameTitle="card-text card-title"
                  originaltitle={movie.original_name}
                  title={movie.title}
                  classNameText="card-text"
                  first_air_date={movie.first_air_date}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average}
                />
              ))}
              {page < totalpage ? (
                 <Buttonsquare
                 onClick={showMoreHandle}
                 type="showMore"
                 title="Show more"
               />
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
