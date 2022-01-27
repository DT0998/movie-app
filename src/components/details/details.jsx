import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Cast } from "../cast/cast";
import { Similar } from "../similar/similar";
import "./details.css";

export const Details = ({ id }) => {
  // const [movie, setMovie] = useState([])
  const [movie, setMovie] = useState({})
  // api
  const media_type = "tv" && "movie"
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/${media_type}/${id}?` + API_KEY;
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";

  // fetch movie api
  useEffect(() => {
    const getTrending = async function () {
      let response = await axios.get(API_URL);
      console.log("response by Details", response.data);
      setMovie(response.data);
      // let data = response.data;
      //   setMovie(data.result || data);
    };
    getTrending(media_type, id);
  }, [API_URL, media_type, id]);



  return (
    <div>
      <Container>
        <Row>
          <div className="details_bg">
            <div className="d-flex justify-content-center align-items-center flex-md-row flex-column">
              <Col>
                <img src={`${IMG_ORG + movie?.backdrop_path}`} alt={movie?.name}></img>
              </Col>
              <Col>
                <p>title</p>
                <p>content</p>
                <p>release</p>
              </Col>
              {/* {movie && movie.map((movie) => {
                (
                  <div>
                    <Col>
                      <img src={`${IMG_ORG + movie.backdrop_path}`} alt={movie.name}></img>
                    </Col>
                    <Col>
                      <p>title</p>
                      <p>content</p>
                      <p>release</p>
                    </Col>
                  </div>
                )
              })} */}
            </div>
          </div>
          <Cast />
          <Similar />
        </Row>
      </Container>
    </div>
  );
};
