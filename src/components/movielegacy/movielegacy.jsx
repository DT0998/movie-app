import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movielegacy.css";
// media query hook
import useMediaQuery from "../../hooks/useMediaquery";
import { Buttonviewmore } from "../buttons/button-viewmore/button-viewmore";

export const Movielegacy = () => {
  const [movielegacy, setMovielegacy] = useState([]);
      // media query
      const isMobile = useMediaQuery("(min-width:320px)");
      const isTablet = useMediaQuery("(min-width:768px)");
      const isDesktop = useMediaQuery("(min-width:1024px)");

  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/movie/top_rated?" + API_KEY;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  // fetch movie api
  const getLegacy = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
      setMovielegacy(data.results);
    console.log(data);
  };
  useEffect(() => {
    getLegacy();
  }, [API_URL]);

  return (
    <div className="wrap_fluid feature w-100">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <div className="d-flex justify-content-between align-items-center my-3">
                <h1 className="introduce_title" data-aos="fade-right" data-aos-duration="1500"> MOVIES LEGACY</h1>
                <Link to ="/movielegacy">
                <Buttonviewmore></Buttonviewmore>
                </Link>
              </div>
              <div className=" d-flex flex-row gap-3" data-aos="fade-down" data-aos-duration="1500">
                {/* desktop */}
                {isDesktop ? movielegacy.map(
                  (movie, index) =>
                    index < 5 && (
                      <Card className="card_container isDesktop" key={movie.id}>
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
                ):null}
                {/* tablet */}
                {isTablet ? movielegacy.map(
                  (movie, index) =>
                    index < 4 && (
                      <Card className="card_container isTablet" key={movie.id}>
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
                ):null}
                {/* mobile */}
                {isMobile ? movielegacy.map(
                  (movie, index) =>
                    index < 2 && (
                      <Card className="card_container isMobile" key={movie.id}>
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
                ):null}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
