import { Container, Row, Col } from "react-bootstrap";
import classes from "../../cast-community-recommend/cast-community-card.module.css";
import CastCommunityCard from "../../cast-community-recommend/cast-community-card";
import { useSelector } from "react-redux";
// swiper
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper";
import { selectorCommunity } from "../../../redux/pages/home/slice";
SwiperCore.use([Scrollbar]);

export const Community = () => {
  const communityData = useSelector(selectorCommunity);
  const IMG_ORG = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="wrap_fluid">
      <Container>
        <Row>
          <Col>
            <h3 className="d-flex justify-content-between align-items-center">
              Community
            </h3>
            <div className={`wrap ${classes.CastCommunity_container}`}>
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
                  {communityData.map((people) => (
                    <SwiperSlide key={people.id}>
                      <CastCommunityCard
                        img_url={IMG_ORG}
                        profile_path={people.profile_path}
                        peoplename={people.name}
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
