import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Casttv } from "../cast-tv/cast-tv";
import { Similartv } from "../similar-tvshow/similar-tvshow";
import { Buttonwatchnow } from "../buttons/button-watchnow/button-watchnow";
import "./details-tvshow.css";
import Aos from "aos";

export const Detailstvshow = ({ id }) => {
  const [tvshow, setTvshow] = useState({});
  const [genres,setGenres] = useState([])
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/tv/${id}?` + API_KEY;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";
  
  
  // fetch movie api
  const getTrending = async function () {
    let response = await axios.get(API_URL);
    setTvshow(response.data);
    setGenres(response.data.genres)
  };
  useEffect(() => { 
    getTrending();
    // use aos
    Aos.init();
  }, [API_URL]);
  
  // change title
  document.title = tvshow?.name;

  return (
    <div>
    <div
      className="wrap_fluid details"
      style={{ backgroundImage: `url(${IMG_ORG + tvshow.backdrop_path})` }}
      
    >
      <Container>
        <Row className="d-flex justify-content-center align-items-center flex-md-row flex-column">
          <Col
            className="d-flex justify-content-center align-items-center"
            md={4}
          >
            <div className="wrap details_img">
              <img
                src={`${IMG_URL + tvshow.poster_path}`}
                alt={tvshow.name}
                className="details_img"
              />
            </div>
          </Col>
          <Col md={8}>
            <div className="wrap details_content">
              <p className="details_title">{tvshow.name}</p>
              <p>{tvshow.overview}</p>
              <ul className="d-flex">
                  {genres.map((genre)=>(
                    <div>
                      <li className="border-genres">{genre.name}</li>
                    </div>
                  ))}
                </ul>
              <p>Release day: {tvshow.first_air_date}</p>
            </div>
            <Buttonwatchnow></Buttonwatchnow>
          </Col>
        </Row>
      </Container>
    </div>
    <Casttv id={id} />
    <Similartv id={id} />
  </div>
  );
};
