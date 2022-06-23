import { Link } from "react-router-dom";
import classes from "./card.module.css";
import { FaStar } from "react-icons/fa";
import { Card } from "react-bootstrap";

export const Cards = (props) => {
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
    <Card className={`${classes.card_container} mx-2 my-2 ${props.res_card}`}>
      <Link to={`/${props.type}/${props.id}`}>
        <img
          src={props.img_url + props.poster_path}
          alt={props.originalalt}
          className={`${classes.img_showcase}`}
          loading="lazy"
        />
        <div className={`${classes.card_showcase}`}>
          <p className={`${classes.card_text} ${classes.card_title}`}>
            {props.title || props.originaltitle}
          </p>
          <p className={classes.card_text}>
            {props.type === "tvshow"
              ? formatDate(props.first_air_date)
              : formatDate(props.release_date) ||
                formatDate(props.first_air_date)}
          </p>
          <div className="d-flex align-items-center">
            <FaStar className="me-2" />
            <p className={props.classNameText}>{props.vote_average}</p>
          </div>
        </div>
      </Link>
    </Card>
  );
};
