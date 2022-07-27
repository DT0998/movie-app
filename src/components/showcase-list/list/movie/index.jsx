/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import classes from "../../showcase-list-card.module.css";
import ListTitle from "../../list-title";
import ButtonShowMore from "../../../buttons/button-square";
import { ShowcaseListCard } from "../../showcase-list-card";
import axios from "axios";
import SortTable from "../../../sort-table";

export const Movielist = () => {
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState();
  const [movietoprate, setMovietoprate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const PAGE = "&page=" + page;
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/movie/popular?" + API_KEY + PAGE;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  // fetch movie api
  const getTrending = async function () {
    try {
      let response = await axios.get(API_URL);
      let data = response.data;
      setIsLoading(true);
      setMovietoprate([...movietoprate, ...data.results]);
      setIsLoading(false);
      setTotalpage(data.total_pages);
    } catch (error) {}
  };
  useEffect(() => {
    getTrending();
    return () => {
      clearTimeout(getTrending());
    };
  }, [API_URL]);

  // show more
  const showMoreHandle = () => {
    setPage(page + 1);
  };
  // option movie sort

  return (
    <div className={classes.list}>
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <ListTitle titlemain="Movies" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <SortTable />
          </Col>
          <Col xs={12} md={8} lg={9}>
            <div className=" d-flex flex-row flex-wrap justify-content-center">
              {movietoprate.map((movie) => (
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
                  {isLoading ? "Loading..." : "Show More"}
                </ButtonShowMore>
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
