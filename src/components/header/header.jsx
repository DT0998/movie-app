import "./header.css";
import { Row, Col, Container } from "react-bootstrap";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Buttonsquare } from "../buttons/button-square/button-square";
// import { AOS } from "aos";

export const Header = () => {
  const [moviepopular, setMoviepopular] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/movie/popular?" + API_KEY;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";

  // fetch movie api
  const getPopular = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setMoviepopular(data.results);
  };
  useEffect(() => {
    getPopular();
  }, [API_URL]);

  // add aos swiper
  // const addAos = ()=>{

  // }

  return (
    <Swiper
      autoplay={{
        delay: 2000,
      }}
      // slideChangeTransitionStart={{addAos}}
      // slideChangeTransitionEnd={{}}
      className="header_slider w-100"

    >
      {moviepopular.map((movie) => (
        <SwiperSlide data-swiper-autoplay="2000" key={movie.id} >
          <div
            className="wrap_fluid header d-flex align-items-center header_opacity"
            style={{ backgroundImage: `url(${IMG_ORG + movie.backdrop_path})` }}
          >
            <Container>
              <Row
                className="d-flex align-items-center"
              
              >
                <Col xs={12} md={8}>
                  <div className="wrap header_content" data-aos="zoom-in">
                    <div className="header_article">
                      <h1 className="header_title">{movie.title}</h1>
                      <p className="header_overview">{movie.overview}</p>
                    </div>
                    <Link to={`/details/movie/${movie.id}`}>
                      <Buttonsquare
                        className="btn_info_watch"
                        title="More info"
                      />
                    </Link>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="wrap header_img">
                    <img
                      src={IMG_URL + movie.poster_path}
                      alt={movie.title}
                      className="img_movie"
                      data-aos="zoom-in"
                    />
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
