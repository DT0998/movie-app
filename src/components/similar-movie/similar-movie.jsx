import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper";
import "./similar-movie.css";
import "swiper/css";
import "swiper/css/scrollbar";
SwiperCore.use([Scrollbar]);

export const Similarmovie = ({ id }) => {
  const [similar, setSimilar] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/movie/${id}/recommendations?` + API_KEY;
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";

  // fetch movie api
  const getSimilar = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setSimilar(data.results);
    console.log(data);
  };
  useEffect(() => {
    getSimilar();
  }, [API_URL]);

  return (
    <div className="wrap_fluid cast w-100">
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <h1 data-aos="fade-right" data-aos-duration="1500">
                Recommendations
              </h1>
            </div>

            <div
              className="wrap bg_cast"
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
                  <SwiperSlide key={similar.id}>
                    <Card
                      className="card_cast card_detail"
                      style={{
                        backgroundImage: `url(${
                          IMG_ORG + similar.backdrop_path
                        })`,
                      }}
                    >
                      <div className="border">
                        <h2>{similar.original_title}</h2>
                      </div>
                    </Card>
                  </SwiperSlide>
                ))
                </div>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
