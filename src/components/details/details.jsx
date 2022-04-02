import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CastMovie } from "../cast-community-similar/cast-movie-slide/cast-movie-slide";
import { Similarmovie } from "../cast-community-similar/similar-movie-slide/similar-movie";
import { TrailerMovie } from "../watchtrailermovie/watchtrailermovie";
import GenresMovie from "./genres/genres-movie";
import GenresTV from "./genres/genres-tv";
import './details.css'

function Details(props) {
  return (
    <React.Fragment>
      <div
        className={props.classNameDetails}
        style={{
          backgroundImage: `url(${props.img_org + props.backdrop_path})`,
        }}
      >
        <Container>
          <Row className="d-flex justify-content-center align-items-center flex-md-row flex-column">
            <Col
              className="d-flex justify-content-center align-items-center"
              md={4}
            >
              <div className={props.classNameDetailsImgContainer}>
                <img
                  src={`${props.img_url + props.poster_path}`}
                  alt={props.alt}
                  className={props.classNameDetailsImg}
                />
              </div>
            </Col>
            <Col md={8}>
              <div className={props.classNameDetailsContent}>
                <p className={props.classNameDetailsTitle}>
                  {props.original_title}
                </p>
                <p>{props.overview}</p>
                {<GenresMovie id={props.id} /> || <GenresTV id={props.id}/>}
                <p>Release day: {props.release_date || props.first_air_date}</p>
              </div>
              <TrailerMovie id={props.id} />
            </Col>
          </Row>
        </Container>
      </div>
      <CastMovie id={props.id} />
      <Similarmovie id={props.id} />
    </React.Fragment>
  );
}

export default Details;
