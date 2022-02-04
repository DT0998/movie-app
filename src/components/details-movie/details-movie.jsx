import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Castmovie } from "../cast-movie/cast-movie";
import { Similarmovie } from "../similar-movie/similar-movie";
import {Buttonwatchnow} from '../buttons/button-watchnow/button-watchnow';
import "./details-movie.css";



export const Detailsmovie = ({id}) => {
  const [movie, setMovie] = useState({});
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/movie/${id}?` + API_KEY;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";

  // fetch movie api
  const getTrending = async function () {
    let response = await axios.get(API_URL);
    setMovie(response.data);
  };

  useEffect(() => {
    getTrending();
  }, [API_URL]);

  return (
    <div>
      <div
        className="wrap_fluid details"
        style={{ backgroundImage: `url(${IMG_ORG + movie.backdrop_path})` }}
      >
        <Container>
          <Row className="d-flex justify-content-center align-items-center flex-md-row flex-column">
              <Col className="d-flex justify-content-center align-items-center" md={4}>
                <div className="wrap details_img">
                  <img
                    src={`${IMG_URL + movie.poster_path}`}
                    alt={movie.name}
                    className="details_img"
                  />
                </div>
              </Col>
              <Col md={8}>
                <div className="wrap details_content">
                  <p className="details_title">{movie.original_title}</p>
                  <p>{movie.overview}</p>
                  <p>Release day: {movie.release_date}</p>
                </div>
              <Buttonwatchnow></Buttonwatchnow>
              </Col>
          </Row>
        </Container>
      </div>
      <Castmovie id={id}/>
      <Similarmovie id={id}/>
    </div>
  );
};
