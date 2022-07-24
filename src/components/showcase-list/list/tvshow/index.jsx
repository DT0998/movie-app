/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../../showcase-list-card.module.css";
import { ShowcaseListCard } from "../../showcase-list-card";
import ButtonShowMore from "../../../buttons/button-square";
import ListTitle from "../../list-title";
import axios from "axios";
import SortTable from "../../../sort-table";

export const Tvshowlist = () => {
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState();
  const [tvshows, setTVshows] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const PAGE = "&page=" + page;
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/tv/popular?" + API_KEY + PAGE;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  // fetch movie api
  const getTvshow = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setTVshows([...tvshows, ...data.results]);
    setTotalpage(data.total_pages);
  };
  useEffect(() => {
    getTvshow();
  }, [API_URL]);

  // show more
  const showMoreHandle = () => {
    setPage(page + 1);
  };

  // option

  return (
    <div className={classes.list}>
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <ListTitle titlemain="TV" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <SortTable />
          </Col>
          <Col xs={12} md={8} lg={9}>
            <div className=" d-flex flex-row flex-wrap justify-content-center">
              {tvshows.map((tvshow) => (
                <ShowcaseListCard
                  key={tvshow.id}
                  type="tvshow"
                  id={tvshow.id}
                  img_url={IMG_URL}
                  poster_path={tvshow.poster_path}
                  originalalt={tvshow.original_name}
                  originaltitle={tvshow.original_name}
                  title={tvshow.title}
                  first_air_date={tvshow.first_air_date}
                  release_date={tvshow.release_date}
                  vote_average={tvshow.vote_average}
                />
              ))}
              {page < totalpage ? (
                <ButtonShowMore onClick={showMoreHandle} type="showMore">
                  Show More
                </ButtonShowMore>
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
