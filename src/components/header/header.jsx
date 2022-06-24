import classes from "./header.module.css";
import { Row, Col, Container } from "react-bootstrap";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Buttonsquare } from "../buttons/button-square/button-square";

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


  return (
    <Swiper
      autoplay={{
        delay: 1000,
      }}
      loop={true}
      className={classes.header_slider}

    >
      {moviepopular.map((movie) => (
        <SwiperSlide data-swiper-autoplay="2000" key={movie.id} >
          <div
            className={`wrap_fluid  d-flex align-items-center ${classes.header}`}
            style={{ backgroundImage: `url(${IMG_ORG + movie.backdrop_path})` }}
          >
            <Container>
              <Row
                className="d-flex align-items-center"
              
              >
                <Col xs={12} md={8}>
                  <div className={`wrap ${classes.header_content}`}>
                    <div className={classes.header_article}>
                      <h1 className={classes.header_title}>{movie.title}</h1>
                      <p className={classes.header_overview}>{movie.overview}</p>
                    </div>
                    <Link to={`/movie/${movie.id}`}>
                      <Buttonsquare
                        type="moreInfo"
                        title="More info"
                      />
                    </Link>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={`wrap ${classes.header_img}`}>
                    <img
                      src={IMG_URL + movie.poster_path}
                      alt={movie.title}
                      className={classes.img_movie}
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
