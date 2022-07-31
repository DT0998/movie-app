import classes from "./showcase-list-card.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Card } from "react-bootstrap";
// route
import { Link } from "react-router-dom";
// icons
import { FaStar } from "react-icons/fa";

export const ShowcaseListCard = (props) => {
  const { placeholderClassName, placeholderSrc, ...rest } = props;
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
    <Card className={`${classes.card_container} ${props.res_card}`}>
      <Link to={`/${rest.type}/${rest.id}`}>
        <LazyLoadImage
          src={rest.img_url + rest.poster_path}
          alt={rest.originalalt}
          className={`${classes.img_showcase}`}
          effect="blur"
          threshold={100}
          delayMethod="debounce"
          delayTime={300}
          placeholderSrc={rest.img_url + rest.poster_path}
        />
        <div className={`${classes.card_showcase}`}>
          <p className={`${classes.card_title}`}>
            {rest.title || rest.originaltitle}
          </p>
          <p className={classes.card_date}>
            {rest.type === "tvshow"
              ? formatDate(rest.first_air_date)
              : formatDate(rest.release_date) ||
                formatDate(rest.first_air_date)}
          </p>
          <div className={`d-flex align-items-center ${classes.card_vote}`}>
            <FaStar className="me-2" />
            <p className={rest.classNameText}>
              {formatStarVote(rest.vote_average)}
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
};
