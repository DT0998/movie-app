/* eslint-disable react-hooks/exhaustive-deps */
import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import "./movielist.css";
import "../../components/buttons/button-loadmore/button-loadmore.css";
import { Link } from "react-router-dom";
import { BsChevronCompactRight } from "react-icons/bs";

export const Movielist = () => {
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState();
  const [movietoprate, setMovietoprate] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const PAGE = "&page=" + page;
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/movie/popular?" + API_KEY + PAGE;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  // fetch movie api
  const getTrending = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setMovietoprate([...movietoprate, ...data.results]);
    setTotalpage(data.total_pages);
  };
  useEffect(() => {
    getTrending();
  }, [API_URL]);

  // load more
  const loadMore = () => {
    setPage(page + 1);
  };
  // use aos
  Aos.init();

  return (
    <div className="wrap_fluid movie_list w-100">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <div className="d-flex justify-content-lg-between align-items-center justify-content-center px-lg-3">
                <h1
                  className="trending_title"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  {" "}
                  MOVIES
                </h1>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <div className="wrap">
              <div className="filter_panel my-3">
                <div className="name d-flex justify-content-between align-items-center">
                  <span>Sort</span>
                  <BsChevronCompactRight className="chevron active" />
                </div>
                <div className="filter d-flex flex-column">
                  <span>Sort Results By</span>
                  <select id="size" className="my-2 box_select">
                    <option>Popularity Descending</option>
                    <option>Popularity Ascending</option>
                    <option>Rating Descending</option>
                    <option>Rating Ascending</option>
                  </select>
                </div>
              </div>
              <div className="search_btn d-flex justify-content-center">
                Search
              </div>
            </div>
          </Col>
          <Col xs={12} md={8} lg={9}>
            <div
              className=" d-flex flex-row flex-wrap justify-content-center"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              {movietoprate.map((movie) => (
                <Card className="card_container mx-2 my-2" key={movie.id}>
                  <Link to={`/details/movie/${movie.id}`}>
                    <img
                      src={IMG_URL + movie.poster_path}
                      alt={movie.original_name}
                      className="img_feature card-img-top"
                    />
                    <div className="card-body card_trending">
                      <p className="card-text">{movie.title}</p>
                      <p className="card-text">{movie.release_date}</p>
                      <p className="card-text">{movie.vote_average}</p>
                    </div>
                  </Link>
                </Card>
              ))}
              {page < totalpage ? (
                <button className="btn_loadmore" onClick={loadMore}>
                  Load more
                </button>
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
