import classes from "./style.module.css";
// lazy load image
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import { selectorSlider } from "../../redux/pages/home/slice";
import { Link } from "react-router-dom";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Lazy } from "swiper";
import "swiper/css";
// effect swiper
import "swiper/css/effect-fade";
// autoplay
import "swiper/css/autoplay";
import React from "react";
SwiperCore.use([Autoplay, EffectFade, Lazy]);

export const Banner = () => {
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";
  const sliderData = useSelector(selectorSlider);

  return (
    <React.Fragment>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 6000,
        }}
        loop={true}
        effect="fade"
        modules={[EffectFade, Autoplay, Lazy]}
        lazy={true}
        preloadImages={false}
        parallax={true}
        className="w-100"
      >
        {sliderData.map(
          (movie, index) =>
            index < 10 && (
              <SwiperSlide data-swiper-autoplay="2000" key={movie.id}>
                <div
                  className={`d-flex align-items-center ${classes.header}`}
                  style={{
                    backgroundImage: `url(${IMG_ORG + movie.backdrop_path})`,
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center w-100 px-3">
                    <div className="col-12 col-md-6">
                      <h1 className={classes.header_title}>{movie.title}</h1>
                      <p className={classes.header_overview}>
                        {movie.overview}
                      </p>
                      <Link to={`/movie/${movie.id}`}>
                        <button className={classes.btn_infowatch}>
                          More info
                        </button>
                      </Link>
                    </div>
                    <div className="d-none d-md-block">
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
                  </div>
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </React.Fragment>
  );
};