import React from "react";
import classes from "./details.module.css";
// lazy image
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Col, Container, Row } from "react-bootstrap";
// component
import GenresMovie from "./genres/movie";
import GenresTV from "./genres/tvshow";
import TrailerTV from "../trailer/tvshow";
import TrailerMovie from "../trailer/movie";
import RecommendTv from "../cast-community-recommend/recommend/tvshow";
import RecommendMovie from "../cast-community-recommend/recommend/movie";
import CastMovie from "../cast-community-recommend/cast/movie";
import CastTv from "../cast-community-recommend/cast/tvshow";

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
  // genres detail
  let detailsGenres;
  if (props.type === "movie") {
    detailsGenres = <GenresMovie id={props.id} />;
  }
  if (props.type === "tvshow") {
    detailsGenres = <GenresTV id={props.id} />;
  }
  // trailer detail
  let detailsTrailer;
  if (props.type === "movie") {
    detailsTrailer = <TrailerMovie id={props.id} />;
  }
  if (props.type === "tvshow") {
    detailsTrailer = <TrailerTV id={props.id} />;
  }
  // recommend detail
  let detailsRecommend;
  if (props.type === "movie") {
    detailsRecommend = <RecommendMovie id={props.id} />;
  }
  if (props.type === "tvshow") {
    detailsRecommend = <RecommendTv id={props.id} />;
  }
  // cast detail
  let detailsCast;
  if (props.type === "movie") {
    detailsCast = <CastMovie id={props.id} />;
  }
  if (props.type === "tvshow") {
    detailsCast = <CastTv id={props.id} />;
  }
  return (
    <React.Fragment>
      <div
        className={`${classes.details}`}
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
                <LazyLoadImage
                  src={`${props.img_url + props.poster_path}`}
                  alt={props.alt}
                  className={classes.details_img}
                  effect="blur"
                  threshold={100}
                  delayMethod="debounce"
                  delayTime={300}
                  placeholderSrc={`${props.img_url + props.poster_path}`}
                />
              </div>
            </Col>
            <Col md={8}>
              <div className={`wrap ${classes.details_content}`}>
                <p className={classes.details_title}>{props.original_title}</p>
                <p>{props.overview}</p>
                {detailsGenres}
                <p className={classes.release_day}>
                  Release day:{" "}
                  {props.type === "tvshow"
                    ? formatDate(props.first_air_date)
                    : formatDate(props.release_date) ||
                      formatDate(props.first_air_date)}
                </p>
              </div>
              {detailsTrailer}
            </Col>
          </Row>
        </Container>
      </div>
      {detailsCast}
      {detailsRecommend}
    </React.Fragment>
  );
}

export default Details;
