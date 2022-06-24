import React from "react";
import classes from "./details.module.css";
import { Col, Container, Row } from "react-bootstrap";
import GenresMovie from "./genres/genres-movie";
import GenresTV from "./genres/genres-tv";
import { TrailerTV } from "../trailer/watchtrailer-tv/watchtrailer-tv";
import { TrailerMovie } from "../trailer/watchtrailer-movie/watchtrailer-movie";
import { RecommendTv } from "../cast-community-recommend/recommend-tvshow-slide/recommend-tvshow";
import { RecommendMovie } from "../cast-community-recommend/recommend-movie-slide/recommend-movie";
import { CastMovie } from "../cast-community-recommend/cast-movie-slide/cast-movie-slide";
import { CastTv } from "../cast-community-recommend/cast-tv-slide/cast-tv-slide";

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
        className={`wrap_fluid ${classes.details}`}
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
              <div className="wrap">
                <img
                  src={`${props.img_url + props.poster_path}`}
                  alt={props.alt}
                  className={classes.details_img}
                />
              </div>
            </Col>
            <Col md={8}>
              <div className={`wrap ${classes.details_content}`}>
                <p className={classes.details_title}>
                  {props.original_title}
                </p>
                <p>{props.overview}</p>
                {props.type === "movie" ? (
                  <GenresMovie id={props.id} />
                ) : props.type === "tvshow" ? (
                  <GenresTV id={props.id} />
                ) : null}
                <p className={classes.release_day}>
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
        <RecommendMovie id={props.id} />
      ) : props.type === "tvshow" ? (
        <RecommendTv id={props.id} />
      ) : null}
    </React.Fragment>
  );
}

export default Details;
