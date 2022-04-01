import { Container, Row, Col } from "react-bootstrap";
// swiper
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper";
import { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import CastCommunityBody from "../cast-community-body";
import CastCommunitySimilarTitle from "../cast-community-similar-title";
SwiperCore.use([Scrollbar]);

export const Community = () => {
  const [Peoples, setPeoples] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/person/popular?" + API_KEY;
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";

  // fetch movie api
  const getCommunity = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setPeoples(data.results);
  };
  useEffect(() => {
    getCommunity();
    // use aos
    Aos.init();
  }, [API_URL]);

  return (
    <div className="wrap_fluid community w-100">
      <Container>
        <Row>
          <Col>
            <CastCommunitySimilarTitle titlemain="Community" />
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
                  {Peoples.map((People) => (
                    <SwiperSlide key={People.id}>
                      <CastCommunityBody
                        classNameCard="card_cast-community-similar"
                        img_url={IMG_ORG}
                        profile_path={People.profile_path}
                        classNamepeople="border"
                        peoplename={People.name}
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
  );
};
