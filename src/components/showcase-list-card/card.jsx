import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./card.css";
import { FaStar } from "react-icons/fa";

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
    <Card className={props.classNameCard}>
      <Link to={`/${props.type}/${props.id}`}>
        <img
          src={props.img_url + props.poster_path}
          alt={props.originalalt}
          className={props.classNameImg}
          loading="lazy"
        />
        <div className={props.classNameCardBody}>
          <p className={props.classNameTitle}>
            {props.title || props.originaltitle}
          </p>
          <p className={props.classNameText}>
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
