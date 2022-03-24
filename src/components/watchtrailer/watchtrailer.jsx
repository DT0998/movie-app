import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Select from 'react-select';
import "./watchtrailer.css";


const options = [
  { value: 'Popularity Descending',label:"Popularity Descending"},
  { value: 'Popularity Ascending',label:"Popularity Ascending" },
  { value: 'Rating Descending',label:"Rating Descending" },
  { value: 'Rating Ascending',label:"Rating Ascending" },
];

export const Tvshowlist = ({id}) => {
  const [Trailer, setTrailer] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/${id}/videos?` + API_KEY;

  // fetch movie api
  const getTvshow = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    console.log(data);
  };
  useEffect(() => {
    getTvshow();
  }, [API_URL]);



  // use aos
  Aos.init();

  // option



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
                        <Select className="my-2"
                          defaultValue={Selected} onChange={setSelected}
                          options={options}>
                        </Select>
                      </div>
                    </div>
                    <div
                      className={`d-flex justify-content-center ${Selected ? "search_btn" : "disable search_btn" }`}
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
                    {tvshows.map((tvshow, index) => (
                      <Card
                        className="card_container mx-2 my-2"
                        key={index}
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
                            <p className="card-text card-title">{tvshow.original_name}</p>
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
