import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./card.css";
import { FaStar } from "react-icons/fa";

export const Cards = (props) => {
  return (
    <Card className={props.classNameCard}>
      <Link to={`/details/${props.type}/${props.id}`}>
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
            {props.first_air_date || props.release_date}
          </p>
          <div className="d-flex align-items-center">
            <FaStar className="me-2"/>
            <p className={props.classNameText}>{props.vote_average}</p>
          </div>
        </div>
      </Link>
    </Card>
  );
};
