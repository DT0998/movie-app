import axios from "axios";
import React, { useEffect, useState } from "react";
import {Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import SimilarBody from "../similar-body";
import CastCommunitySimilarTitle from "../cast-community-similar-title";
SwiperCore.use([Scrollbar]);

export const Similarmovie = ({ id }) => {
  const [Similars, setSimilars] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/movie/${id}/recommendations?` + API_KEY;
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";

  // fetch movie api
  const getSimilar = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setSimilars(data.results);
  };
  useEffect(() => {
    getSimilar();
    // after click movie
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [API_URL]);

  return (
    <React.Fragment>
      {Similars.length === 0 ? null : (
    <div className="wrap_fluid cast-community-similar w-100">
      <Container>
        <Row>
          <Col>
            <CastCommunitySimilarTitle titlemain="Recommendations" />
            <div
              className="wrap bg_recommend"
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
                  {Similars.map((Similar) => (
                    <SwiperSlide key={Similar.id}>
                      <SimilarBody
                        type="movie"
                        linkto={Similar.id}
                        classNameCard="card_cast-community-similar"
                        img_org={IMG_ORG}
                        backdrop_path={Similar.backdrop_path}
                        classNameTitle="border"
                        original_title={Similar.original_title}
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
