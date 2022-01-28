import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Casttv } from "../cast-tv/cast-tv";
import { Similartv } from "../similar-tvshow/similar-tvshow";
import "./details-tvshow.css";

export const Detailstvshow = ({ id }) => {
  const [tvshow, setTvshow] = useState({});
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/tv/${id}?` + API_KEY;
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";

  // fetch movie api
  const getTrending = async function (path) {
    let response = await axios.get(API_URL);
    console.log("response by Details", response.data);
    setTvshow(response.data);
  };
  useEffect(() => { 
    getTrending();
  }, [API_URL]);

  return (
    <div>
      <Container>
        <Row>
          <div className="details_bg">
            <div className="d-flex justify-content-center align-items-center flex-md-row flex-column">
              <Col>
                <img
                  src={`${IMG_ORG + tvshow?.backdrop_path}`}
                  alt={tvshow?.name}
                ></img>
              </Col>
              <Col>
                <p>title</p>
                <p>content</p>
                <p>release</p>
              </Col>
            </div>
          </div>
          <Casttv />
          <Similartv />
        </Row>
      </Container>
    </div>
  );
};
