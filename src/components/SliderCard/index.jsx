/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import classes from "./style.module.css";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card } from "react-bootstrap";
SwiperCore.use([Scrollbar]);

const SliderCard = (props) => {
  const { data, extraClass, IMG_ORG, type, title } = props;
  const getLink = (movieId) => {
    if (type === "movie") {
      return `/movie/${movieId}`;
    } else if (type === "tv") {
      return `/tvshow/${movieId}`;
    } else {
      return null;
    }
  };
  return (
    <React.Fragment>
      {data.length === 0 ? null : (
        <React.Fragment>
          <h1 className="d-flex justify-content-between align-items-center">
            {title}
          </h1>
          <div className={extraClass}>
            <Swiper
              slidesPerView={4}
              scrollbar={{
                " dragable": true,
              }}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                },
                // when window width is >= 480px
                425: {
                  slidesPerView: 2,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              <div className="d-flex flex-column justify-content-around">
                {data.map((movie, index) => {
                  if (
                    movie.backdrop_path === null ||
                    movie.profile_path === null
                  ) {
                    return null;
                  } else {
                    return (
                      index < 7 && (
                        <SwiperSlide key={movie.id}>
                          <Link to={getLink(movie.id)}>
                            {/* Use movie properties instead of props */}
                            <Card className={classes.slider_card}>
                              <LazyLoadImage
                                src={
                                  IMG_ORG +
                                  (movie.backdrop_path || movie.profile_path)
                                }
                                placeholderSrc={
                                  IMG_ORG +
                                  (movie.backdrop_path || movie.profile_path)
                                }
                                className={classes.slider_image}
                                alt={movie.original_title || movie.name}
                                effect="blur"
                                threshold={100}
                                delayMethod="debounce"
                                delayTime={300}
                              />
                              <div className={classes.border_card}>
                                <h2>{movie.original_title || movie.name}</h2>
                              </div>
                            </Card>
                          </Link>
                        </SwiperSlide>
                      )
                    );
                  }
                })}
              </div>
            </Swiper>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default SliderCard;
