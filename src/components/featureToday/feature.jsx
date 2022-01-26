import "./feature.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
// media query hook
import useMediaQuery from "../../hooks/useMediaquery";
import { Buttonviewmore } from "../buttons/button-viewmore/button-viewmore";

// api
const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "http://image.tmdb.org/t/p/w500/";

export const Feature = () => {
  const [movietrending, setMovietrending] = useState([]);
  // media query
  const isMobile = useMediaQuery("(min-width:320px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");

  // fetch movie api
  useEffect(() => {
    const getTrending = async function () {
      let { results } = (
        await axios.get(`${BASE_URL}/trending/all/day?${API_KEY}`)
      ).data;
      setMovietrending(results);
    };
    getTrending();
  }, []);

  // use aos
  Aos.init();

  return (
    <div className="wrap_fluid feature w-100">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <div className="d-flex justify-content-between align-items-center my-3">
                <h1
                  className="introduce_title"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  {" "}
                  TRENDING
                </h1>
                <Link to="/trending">
                  <Buttonviewmore></Buttonviewmore>
                </Link>
              </div>
              <div
                className=" d-flex flex-row gap-3"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                {/* desktop */}

                {isDesktop
                  ? movietrending.map(
                    (movie, index) =>
                      index < 5 && (
                        <Card
                          className="card_container isDesktop"
                          key={movie.id}
                        >
                          <Link to={`/details/${movie.id}`}>
                            {/* <Link to={`/details`}> */}
                            <img
                              src={IMG_URL + movie.poster_path}
                              alt={movie.original_name}
                              className="img_feature card-img-top"
                            />
                            <div className="card-body card_trending">
                              <p className="card-text">{movie.title}</p>
                              <p className="card-text">
                                {movie.release_date}
                              </p>
                              <p className="card-text">
                                {movie.vote_average}
                              </p>
                            </div>
                          </Link>
                        </Card>
                      )
                  )
                  : null}

                {/* tablet */}
                {isTablet
                  ? movietrending.map(
                    (movie, index) =>
                      index < 4 && (
                        <Card
                          className="card_container isTablet"
                          key={movie.id}
                        >
                          <img
                            src={IMG_URL + movie.poster_path}
                            alt={movie.original_name}
                            className="img_feature card-img-top"
                          />
                          <div className="card-body card_trending">
                            <p className="card-text">{movie.title}</p>
                            <p className="card-text">{movie.release_date}</p>
                            <p className="card-text">{movie.vote_average}</p>
                          </div>
                        </Card>
                      )
                  )
                  : null}
                {/* mobile */}
                {isMobile
                  ? movietrending.map(
                    (movie, index) =>
                      index < 2 && (
                        <Card
                          className="card_container isMobile"
                          key={movie.id}
                        >
                          <img
                            src={IMG_URL + movie.poster_path}
                            alt={movie.original_name}
                            className="img_feature card-img-top"
                          />
                          <div className="card-body card_trending">
                            <p className="card-text">{movie.title}</p>
                            <p className="card-text">{movie.release_date}</p>
                            <p className="card-text">{movie.vote_average}</p>
                          </div>
                        </Card>
                      )
                  )
                  : null}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
