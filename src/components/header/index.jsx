import classes from "./header.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectorSlider } from "../../redux/home/slice";
import { Link } from "react-router-dom";
import ButtonMoreInfo from "../buttons/button-square";
// skeleton loading
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
// effect swiper
import { EffectFade } from "swiper";
import "swiper/css/effect-fade";
// autoplay
import "swiper/css/autoplay";
SwiperCore.use([Autoplay]);

export const Header = () => {
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";
  const sliderData = useSelector(selectorSlider);
  // style skeleton image
  const skeletonImage = { width: 416, height: 624, borderRadius: 10 };

  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 4000,
      }}
      loop={true}
      effect="fade"
      modules={[EffectFade]}
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
                      <ButtonMoreInfo type="moreInfo" title="More info" />
                    </Link>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={`wrap ${classes.header_img}`}>
                    <ReactPlaceholder
                      type="rect"
                      color="#E0E0E0"
                      showLoadingAnimation={true}
                      style={skeletonImage}
                      ready={true}
                      delay={1000}
                    >
                      <img
                        src={IMG_URL + movie.poster_path}
                        alt={movie.title}
                        className={classes.img_movie}
                        loading="lazy"
                      />
                    </ReactPlaceholder>
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
