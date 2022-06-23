import React from "react";
import "./details.css";
import { Col, Container, Row } from "react-bootstrap";
import { CastMovie } from "../cast-community-similar/cast-movie-slide/cast-movie-slide";
import { Similarmovie } from "../cast-community-similar/similar-movie-slide/similar-movie";
import { TrailerMovie } from "../trailer/watchtrailer-movie/watchtrailer-movie";
import GenresMovie from "./genres/genres-movie";
import GenresTV from "./genres/genres-tv";
import { TrailerTV } from "../trailer/watchtrailer-tv/watchtrailer-tv";
import { CastTv } from "../cast-community-similar/cast-tv-slide/cast-tv-slide";
import { Similartv } from "../cast-community-similar/similar-tvshow-slide/similar-tvshow";

function Details(props) {
  // format date
  const formatDate = (date) => {
    const [dateStr] = new Date(date)
      .toLocaleString("default", {
        month: "short",
        year: "numeric",
        day: "numeric",
      })
      .split("T");
    return dateStr;
  };
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
                {props.type === "movie" ? (
                  <GenresMovie id={props.id} />
                ) : props.type === "tvshow" ? (
                  <GenresTV id={props.id} />
                ) : null}
                <p className={props.classNameDay}>
                  Release day:{" "}
                  {props.type === "tvshow"
                    ? formatDate(props.first_air_date)
                    : formatDate(props.release_date) ||
                      formatDate(props.first_air_date)}
                </p>
              </div>
              {props.type === "movie" ? (
                <TrailerMovie id={props.id} />
              ) : props.type === "tvshow" ? (
                <TrailerTV id={props.id} />
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
      {props.type === "movie" ? (
        <CastMovie id={props.id} />
      ) : props.type === "tvshow" ? (
        <CastTv id={props.id} />
      ) : null}
      {props.type === "movie" ? (
        <Similarmovie id={props.id} />
      ) : props.type === "tvshow" ? (
        <Similartv id={props.id} />
      ) : null}
    </React.Fragment>
  );
}

export default Details;
