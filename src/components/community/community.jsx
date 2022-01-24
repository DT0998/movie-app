import { Container, Row, Col, Card } from "react-bootstrap";
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
                slidesPerView={4}
                scrollbar={{
                  " dragable": true,
                }}
              >
                <div className="d-flex flex-column justify-content-around">
                  <SwiperSlide>
                    <Card className="card_community card_detail">
                      <div className="border">
                        <h2>Ben Stiller</h2>
                      </div>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Card className="card_community card_detail">
                      <div className="border">
                        <h2>Ben Stiller</h2>
                      </div>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Card className="card_community card_detail">
                      <div className="border">
                        <h2>Ben Stiller</h2>
                      </div>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Card className="card_community card_detail">
                      <div className="border">
                        <h2>Ben Stiller</h2>
                      </div>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Card className="card_community card_detail">
                      <div className="border">
                        <h2>Ben Stiller</h2>
                      </div>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Card className="card_community card_detail">
                      <div className="border">
                        <h2>Ben Stiller</h2>
                      </div>
                    </Card>
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
