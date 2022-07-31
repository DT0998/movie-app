import classes from "./banner.module.css";
// lazy load image
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectorSlider } from "../../redux/pages/home/slice";
import { Link } from "react-router-dom";
import ButtonMoreInfo from "../buttons/button-square";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/css";
// effect swiper
import "swiper/css/effect-fade";
// autoplay
import "swiper/css/autoplay";
SwiperCore.use([Autoplay]);

export const Banner = () => {
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const IMG_ORG = "https://image.tmdb.org/t/p/w1280/";
  const sliderData = useSelector(selectorSlider);

  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 6000,
      }}
      loop={true}
      effect="fade"
      modules={[EffectFade]}
      className={classes.header_slider}
    >
      {sliderData.map(
        (movie, index) =>
          index < 10 && (
            <SwiperSlide data-swiper-autoplay="2000" key={movie.id}>
              <div
                className={`wrap_fluid  d-flex align-items-center ${classes.header}`}
                style={{
                  backgroundImage: `url(${IMG_ORG + movie.backdrop_path})`,
                }}
              >
                <Container>
                  <Row className="d-flex align-items-center">
                    <Col xs={12} md={8}>
                      <div className={`wrap ${classes.header_content}`}>
                        <div className={classes.header_article}>
                          <h1 className={classes.header_title}>
                            {movie.title}
                          </h1>
                          <p className={classes.header_overview}>
                            {movie.overview}
                          </p>
                        </div>
                        <Link to={`/movie/${movie.id}`}>
                          <ButtonMoreInfo type="moreInfo">
                            More info
                          </ButtonMoreInfo>
                        </Link>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className={`wrap ${classes.header_img}`}>
                        <LazyLoadImage
                          src={IMG_URL + movie.poster_path}
                          alt={movie.title}
                          className={classes.img_movie}
                          effect="blur"
                          threshold={100}
                          delayMethod="debounce"
                          delayTime={300}
                          placeholderSrc={IMG_URL + movie.poster_path}
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
};
