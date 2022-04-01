import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Select from 'react-select';
import { BsChevronCompactRight } from "react-icons/bs";
import { Buttonsquare } from "../../../buttons/button-square/button-square";

const options = [
  { value: 'Popularity Descending', label: "Popularity Descending" },
  { value: 'Popularity Ascending', label: "Popularity Ascending" },
  { value: 'Rating Descending', label: "Rating Descending" },
  { value: 'Rating Ascending', label: "Rating Ascending" },
];
export const Trendinglist = () => {
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState();
  const [movietrending, setMovietrending] = useState([]);
  const [Selected, setSelected] = useState(false);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const PAGE = "&page=" + page;
  const BASE_URL = "https://api.themoviedb.org/3";
  const SORT_TYPE = "&sort_by=popularity.desc"
  const API_URL = BASE_URL + "/trending/movie/week?" + API_KEY + PAGE;
  const API_SORT = BASE_URL + "/discover/movie?" + API_KEY + SORT_TYPE
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

  // load more
  const loadMore = () => {
    setPage(page + 1);
  };
  // search release_date
  const handlesortReleasedate = async function () {
    let response = await axios.get(`${API_SORT}`);
    let data = response.data;
    console.log(data);
  };
  // use aos
  Aos.init();

  return (
    <div className="wrap_fluid list w-100">
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-lg-between align-items-center justify-content-center">
              <h2 data-aos="fade-right" data-aos-duration="1500">
                TRENDING
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="d-flex">
          <Col xs={12} md={4} lg={3}>
            <div className="wrap">
              <div className="filter_panel my-3">
                <div className="name d-flex justify-content-between align-items-center">
                  <span>Sort</span>
                  <BsChevronCompactRight className="chevron active" />
                </div>
                <div className="filter d-flex flex-column">
                  <span>Sort Results By</span>
                  <Select className="my-2"
                    defaultValue={Selected} onChange={setSelected}
                    options={options}>
                  </Select>
                </div>
              </div>
              <div
                className={`d-flex justify-content-center ${Selected ? "search_btn" : "disable search_btn"}`}
                onClick={handlesortReleasedate}
              >
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
              {movietrending.map((movie, index) => (
                <Card className="card_container mx-2 my-2" key={index}>
                  <Link to={`/details/movie/${movie.id}`}>
                    <img
                      src={IMG_URL + movie.poster_path}
                      alt={movie.original_name}
                      className="img_feature card-img-top"
                    />
                    <div className="card-body card_trending">
                      <p className="card-text card-title">
                        {movie.title || movie.original_name}
                      </p>
                      <p className="card-text">
                        {movie.release_date || movie.first_air_date}
                      </p>
                      <p className="card-text">{movie.vote_average}</p>
                    </div>
                  </Link>
                </Card>
              ))}
              {page < totalpage ? (
             <Buttonsquare onClick={loadMore} className="btn_loadmore" title="load more"/>
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
