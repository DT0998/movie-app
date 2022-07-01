import classes from "./header.module.css";
import { Row, Col, Container } from "react-bootstrap";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { Buttonsquare } from "../buttons/button-square/button-square";
import {useSelector} from 'react-redux';

export const Header = () => {
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";
  const sliderData = useSelector((state) => state.homepage.slider)
  // add aos swiper
  
  return (
    <Swiper
      autoplay={{
        delay: 1000,
      }}
      loop={true}
      className={classes.header_slider}
    >
      {sliderData.map((movie) => (
        <SwiperSlide data-swiper-autoplay="2000" key={movie.id}>
          <div
            className={`wrap_fluid  d-flex align-items-center ${classes.header}`}
            style={{ backgroundImage: `url(${IMG_ORG + movie.backdrop_path})` }}
          >
            <Container>
              <Row className="d-flex align-items-center">
                <Col xs={12} md={8}>
                  <div className={`wrap ${classes.header_content}`}>
                    <div className={classes.header_article}>
                      <h1 className={classes.header_title}>{movie.title}</h1>
                      <p className={classes.header_overview}>
                        {movie.overview}
                      </p>
                    </div>
                    <Link to={`/movie/${movie.id}`}>
                      <Buttonsquare type="moreInfo" title="More info" />
                    </Link>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={`wrap ${classes.header_img}`}>
                    <img
                      src={IMG_URL + movie.poster_path}
                      alt={movie.title}
                      className={classes.img_movie}
                      loading="lazy"
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
