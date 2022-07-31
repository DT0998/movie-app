/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "../../recommend-card.module.css";
import RecommendCard from "../../recommend-card";
import axios from "axios";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
SwiperCore.use([Scrollbar]);


const RecommendMovie = ({ id }) => {
  const [Recommends, setRecommends] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/movie/${id}/recommendations?` + API_KEY;
  const IMG_ORG = "https://image.tmdb.org/t/p/original";

  // fetch movie api
  const getRecommend = async function () {
    try {
      let response = await axios.get(API_URL);
      let data = response.data;
      setRecommends(data.results);
    } catch (error) { 
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        transition: "zoom",
      });
    }
  };
  
  useEffect(() => {
    getRecommend();
    // after click movie
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [API_URL]);

  // filter null movie
  let recommendMovie = Recommends.map((recommend, index) => {
    if (recommend.backdrop_path === null) {
      return null;
    }
    return (
      index < 7 && (
        <SwiperSlide key={recommend.id}>
          <RecommendCard
            type="movie"
            linkto={recommend.id}
            img_org={IMG_ORG}
            backdrop_path={recommend.backdrop_path}
            original_title={recommend.original_title}
          />
        </SwiperSlide>
      )
    );
  });
  return (
    <React.Fragment>
      {Recommends.length === 0 ? null : (
        <React.Fragment>
          <Container>
            <h3 className="d-flex justify-content-between align-items-center">
              Recommendations
            </h3>
          </Container>
          <div className={`${classes.Recommend_container}`}>
            <Container>
              <Row>
                <Col>
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
                      {recommendMovie}
                    </div>
                  </Swiper>
                </Col>
              </Row>
            </Container>
          </div>
        </React.Fragment>
      )}
      
    </React.Fragment>
  );
};
export default RecommendMovie;
