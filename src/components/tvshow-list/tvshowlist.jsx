import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./tvshowlist.css";

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

  // load more
  const loadMore = () => {
    setPage(page + 1);
  };

  // use aos
  Aos.init();

  return (
    <div className="wrap_fluid tvshow_list w-100">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <div className="d-flex justify-content-lg-between align-items-center justify-content-center">
                <h2
                  className="trending_title"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  TV SHOWS
                </h2>
              </div>
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
                    <div
                      className="search_btn d-flex justify-content-center"
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
                    {tvshows.map((tvshow) => (
                      <Card
                        className="card_container mx-2 my-2"
                        key={tvshow.id}
                      >
                        <Link to={`/details/tv/${tvshow.id}`}>
                          <img
                            src={
                              IMG_URL + tvshow.poster_path ||
                              tvshow.backdrop_path
                            }
                            alt={tvshow.original_name}
                            className="img_feature card-img-top"
                          />
                          <div className="card-body card_trending">
                            <p className="card-text">{tvshow.original_name}</p>
                            <p className="card-text">{tvshow.first_air_date}</p>
                            <p className="card-text">{tvshow.vote_average}</p>
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
