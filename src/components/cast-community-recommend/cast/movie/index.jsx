/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import classes from "../../cast-community-card.module.css";
import CastCommunityCard from "../../cast-community-card";
import axios from "axios";
// swiper
import SwiperCore, { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
SwiperCore.use([Scrollbar]);

const CastMovie = ({ id }) => {
  const [Casts, setCasts] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/movie/${id}/credits?` + API_KEY;
  const IMG_ORG = "https://image.tmdb.org/t/p/original";

  // fetch movie api
  const getCast = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setCasts(data.cast);
  };
  useEffect(() => {
    getCast();
  }, [API_URL]);

  // filter null  cast movie
  let castMovie = Casts.map((cast, index) => {
    if (cast.profile_path === null) {
      return null;
    }
    // render 10 cast movie
    return (
      index < 7 && (
        <SwiperSlide key={cast.id}>
          <CastCommunityCard
            img_url={IMG_ORG}
            profile_path={cast.profile_path}
            peoplename={cast.name}
          />
        </SwiperSlide>
      )
    );
  });

  return (
    <React.Fragment>
      {Casts.length === 0 ? null : (
        <div>
          <div>
            <div>
              <div>
                <h3 className="d-flex justify-content-between align-items-center">
                  Cast
                </h3>
                <div className={`${classes.CastCommunity_container}`}>
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
                      {castMovie}
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default CastMovie;
