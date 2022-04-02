import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import "./details-movie.css";
import { TrailerMovie } from "../watchtrailermovie/watchtrailermovie";
import { CastMovie } from "../cast-community-similar/cast-movie-slide/cast-movie-slide";
import { Similarmovie } from "../cast-community-similar/similar-movie-slide/similar-movie";
import Details from "../details/details";

export const Detailsmovie = ({ id }) => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
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
    setGenres(response.data.genres);
  };

  useEffect(() => {
    getTrending();
    // use aos
    Aos.init();
  }, [API_URL]);

  // change title
  document.title = movie?.original_title;

  return (
    <React.Fragment>
      {/* <div
        className="wrap_fluid details"
        style={{ backgroundImage: `url(${IMG_ORG + movie.backdrop_path})` }}
      >
        <Container>
          <Row className="d-flex justify-content-center align-items-center flex-md-row flex-column">
            <Col
              className="d-flex justify-content-center align-items-center"
              md={4}
            >
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
                <ul className="d-flex">
                  {genres.map((genre)=>(
                    <li className="border-genres" key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
                <p>Release day: {movie.release_date}</p>
              </div>
              <TrailerMovie id={id}/>
            </Col>
          </Row>
        </Container>
      </div>
      <CastMovie id={id} />
      <Similarmovie id={id} /> */}
      <Details
        classNameDetails="wrap_fluid details"
        img_org={IMG_ORG}
        backdrop_path={movie.backdrop_path}
        classNameDetailsImgContainer="wrap details_img"
        img_url={IMG_URL}
        poster_path={movie.poster_path}
        alt={movie.name}
        classNameDetailsImg="details_img"
        classNameDetailsContent="wrap details_content"
        classNameDetailsTitle="details_title"
        original_title={movie.original_title}
        overview={movie.overview}
        genres={genres}
        classNameGenres="border-genres"
        genresid={genres.id}
        genresname={genres.name}
        release_date={movie.release_date}
        id={id}
      />
    </React.Fragment>
  );
};
