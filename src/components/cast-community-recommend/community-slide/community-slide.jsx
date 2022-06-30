import { Container, Row, Col } from "react-bootstrap";
import classes from '../cast-community-card.module.css'
import CastCommunityRecommendTitle from "../cast-community-recommend-card-title";
import CastCommunityCard from "../cast-community-card";
import {useSelector} from 'react-redux'
// swiper
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper";
SwiperCore.use([Scrollbar]);

export const Community = () => {
  const communityData = useSelector((state) => state.homepage.movielegacy);
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";


  return (
    <div className="wrap_fluid">
      <Container>
        <Row>
          <Col>
            <CastCommunityRecommendTitle titlemain="Community" />
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
                  {communityData.map((People) => (
                    <SwiperSlide key={People.id}>
                      <CastCommunityCard
                        img_url={IMG_ORG}
                        profile_path={People.profile_path}
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
