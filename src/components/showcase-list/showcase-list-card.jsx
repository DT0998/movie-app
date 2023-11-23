import classes from "./showcase-list-card.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Card } from "react-bootstrap";
// route
import { Link } from "react-router-dom";
// icons
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export const ShowcaseListCard = (props) => {
  const {
    type,
    id,
    res_card,
    img_url,
    poster_path,
    originalalt,
    title,
    originaltitle,
    first_air_date,
    release_date,
    classNameText,
    vote_average,
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
      className={`${classes.card_container} ${res_card} ${
        activeCard && classes.card_container_active
      }`}
      onMouseLeave={() => setActiveCard(false)}
      onMouseEnter={() => setActiveCard(true)}
    >
      <Link to={`/${type}/${id}`}>
        <LazyLoadImage
          src={img_url + poster_path}
          alt={originalalt}
          className={`${classes.img_showcase} ${
            activeCard && classes.img_showcase_active
          }`}
          effect="blur"
          threshold={100}
          delayMethod="debounce"
          delayTime={300}
          placeholderSrc={img_url + poster_path}
        />
        <div className={classes.img_container} />

        <div className={`${classes.card_showcase}`}>
          <p className={`${classes.card_title}`}>{title || originaltitle}</p>
          <p className={classes.card_date}>
            {type === "tvshow"
              ? formatDate(first_air_date)
              : formatDate(release_date) || formatDate(first_air_date)}
          </p>
          <div className={`d-flex align-items-center ${classes.card_vote}`}>
            <FaStar className="me-2" />
            <p className={classNameText}>
              {formatStarVote(vote_average)}
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
};
