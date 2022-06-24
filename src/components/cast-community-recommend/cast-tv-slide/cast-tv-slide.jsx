import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from '../cast-community-card.module.css';
import CastCommunityRecommendTitle from "../cast-community-recommend-card-title";
import CastCommunityCard from "../cast-community-card";
import axios from "axios";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
SwiperCore.use([Scrollbar]);

export const CastTv = ({ id }) => {
  const [Casts, setCasts] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/tv/${id}/credits?` + API_KEY;
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";

  // fetch movie api
  const getCast = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setCasts(data.cast);
  };
  useEffect(() => {
    getCast();
  }, [API_URL]);

  return (
    <React.Fragment>
      {Casts.length === 0 ? null : (
        <div className="wrap_fluid">
          <Container>
            <Row>
              <Col>
                <CastCommunityRecommendTitle titlemain="Cast" />
                <div
                  className={`wrap ${classes.CastCommunity_container}`}
                >
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
                      {Casts.map((Cast) => (
                        <SwiperSlide key={Cast.id}>
                          <CastCommunityCard
                            img_url={IMG_ORG}
                            profile_path={Cast.profile_path}
                            peoplename={Cast.name}
                          />
                        </SwiperSlide>
                      ))}
                    </div>
                  </Swiper>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </React.Fragment>
  );
};
