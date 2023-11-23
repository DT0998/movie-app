import classes from "./style.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Card } from "react-bootstrap";
// route
import { Link } from "react-router-dom";
// icons
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const MovieCard = (props) => {
  const {
    type,
    id,
    resCard,
    imgUrl,
    posterPath,
    originalAlt,
    title,
    originalTitle,
    firstAirDate,
    releaseDate,
    extraClassTitle,
    voteAverage,
  } = props;
  const [activeCard, setActiveCard] = useState(false);

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
  // convert star vote
  const formatStarVote = (star) => {
    return star.toFixed(1);
  };

  return (
    <Card
      className={`${classes.card_container} ${resCard} ${
        activeCard && classes.card_container_active
      }`}
      onMouseLeave={() => setActiveCard(false)}
      onMouseEnter={() => setActiveCard(true)}
    >
      <Link to={`/${type}/${id}`}>
        <LazyLoadImage
          src={imgUrl + posterPath}
          alt={originalAlt}
          className={`${classes.img_showcase} ${
            activeCard && classes.img_showcase_active
          }`}
          effect="blur"
          threshold={100}
          delayMethod="debounce"
          delayTime={300}
          placeholderSrc={imgUrl + posterPath}
        />
        <div className={classes.img_container} />

        <div className={`${classes.card_showcase}`}>
          <p className={`${classes.card_title}`}>{title || originalTitle}</p>
          <p className={classes.card_date}>
            {formatDate(firstAirDate || releaseDate)}
          </p>
          <div className={`d-flex align-items-center ${classes.card_vote}`}>
            <FaStar className="me-2" />
            <p className={extraClassTitle}>{formatStarVote(voteAverage)}</p>
          </div>
        </div>
      </Link>
    </Card>
  );
};
export default MovieCard;
