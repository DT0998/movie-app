import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./showcasebody.css";
// media query hook

export const ShowcaseBody = (props) => {
  return (
      <Card className={props.classNameCard}>
        <Link to={`/details/${props.type}/${props.id}`}>
          <img
            src={props.img_url + props.poster_path}
            alt={props.originalalt}
            className={props.classNameImg}
          />
          <div className={props.classNameCardBody}>
            <p className={props.classNameTitle}>
              {props.title || props.originaltitle}
            </p>
            <p className={props.classNameText}>
              {props.first_air_date || props.release_date}
            </p>
            <p className={props.classNameText}>{props.vote_average}</p>
          </div>
        </Link>
      </Card>
  );
};
