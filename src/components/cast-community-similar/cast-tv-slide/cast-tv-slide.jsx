import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import CastCommunityBody from "../cast-community-body";
import CastCommunitySimilarTitle from "../cast-community-similar-title";
SwiperCore.use([Scrollbar]);

export const CastTv = ({ id }) => {
  const [CastsTV, setCastsTV] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/tv/${id}/credits?` + API_KEY;
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";

  // fetch movie api
  const getCast = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setCastsTV(data.cast);
  };
  useEffect(() => {
    getCast();
  }, [API_URL]);

  return (
    <React.Fragment>
      {CastsTV.length === 0 ? null : (
        <div className="wrap_fluid cast-community-similar w-100">
          <Container>
            <Row>
              <Col>
                <CastCommunitySimilarTitle titlemain="Cast" />
                <div
                  className="wrap bg_cast-community-similar"
                  data-aos="fade-down"
                  data-aos-duration="1500"
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
                      {CastsTV.map((Cast) => (
                        <SwiperSlide key={Cast.id}>
                          <CastCommunityBody
                            classNameCard="card_cast-community-similar"
                            img_url={IMG_ORG}
                            profile_path={Cast.profile_path}
                            classNamepeople="border"
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
