import { Container, Row, Col } from "react-bootstrap";
import "./community.css";
// swiper
import "swiper/css";
import "swiper/css/scrollbar"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper";
SwiperCore.use([Scrollbar]);


export const Community = () => {
  return (
    <div className="wrap_fluid community">
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <h1>Community</h1>
              <button
                className="btn_view view-more"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">View More</span>
              </button>
            </div>

            <div className="wrap bg_community">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                scrollbar={{
                  " dragable": true,
                }}
              >
                <div className="d-flex flex-column justify-content-around">
                  <SwiperSlide>
                    <div class="card_community card_detail">
                      <div class="border">
                        <h2>Ben Stiller</h2>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
