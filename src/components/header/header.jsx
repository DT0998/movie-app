import "./header.css";

import { Row, Col, Container } from "react-bootstrap";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import axios from "axios";


export const Header = () => {
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/movie/popular?" + API_KEY;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";

  // fetch movie api
  const [moviepopular, setMoviepopular] = useState([]);

  useEffect(() => {
    const getPopular = async function () {
      let response = await axios.get(API_URL);
      let data = response.data;
      setMoviepopular(data.results);
    };
    getPopular();
  }, [API_URL]);

  return (
    <Swiper
      autoplay={{
        delay: 2000,
      }}
      className="header_slider"
    >
      {moviepopular.map((movie) => (
        <SwiperSlide data-swiper-autoplay="2000" key={movie.id}>
          <div
            className="wrap_fluid header"
            style={{ backgroundImage: `url(${IMG_ORG + movie.backdrop_path})` }}
          >
            <Container>
              <Row className="d-flex align-items-center">
                <Col xs={12} md={8}>
                  <div className="wrap header_content">
                    <div className="header_article">
                      <h1>{movie.title}</h1>
                      <p className="header_overview">{movie.overview}</p>
                    </div>
                    <button className="btn_watch">Watch Now</button>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="wrap header_img">
                    <img
                      src={IMG_URL + movie.poster_path}
                      alt={movie.title}
                      className="img_movie"
                    ></img>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
