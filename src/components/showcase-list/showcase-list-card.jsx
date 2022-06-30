import classes from "./showcase-list-card.module.css";
import { Card } from "react-bootstrap";
// route
import { Link } from "react-router-dom";
// icons
import { FaStar } from "react-icons/fa";

export const ShowcaseListCard = (props) => {
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
  const formatStarVote = (star) =>{
    const stars = star.toFixed(1)
    return stars;
  }

  return (
    <Card className={`${classes.card_container} ${props.res_card}`}>
      <Link to={`/${props.type}/${props.id}`}>
        <img
          src={props.img_url + props.poster_path}
          alt={props.originalalt}
          className={`${classes.img_showcase}`}
          loading="lazy"
        />
        <div className={`${classes.card_showcase}`}>
          <p className={`${classes.card_title}`}>
            {props.title || props.originaltitle}
          </p>
          <p className={classes.card_date}>
            {props.type === "tvshow"
              ? formatDate(props.first_air_date)
              : formatDate(props.release_date) ||
                formatDate(props.first_air_date)}
          </p>
          <div className={`d-flex align-items-center ${classes.card_vote}`}>
            <FaStar className="me-2" />
            <p className={props.classNameText}>
             {formatStarVote(props.vote_average)}
              </p>
          </div>
        </div>
      </Link>
    </Card>
  );
};
