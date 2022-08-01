import React from "react";
import classes from "./recommend-card.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// route
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function RecommendCard(props) {
  let recommend;
  if (props.backdrop_path === null) {
    return null;
  } else {
    recommend = (
      <Link to={`/${props.type}/${props.linkto}`}>
        <Card className={classes.Recommend_card}>
          <LazyLoadImage
            src={props.img_org + props.backdrop_path}
            placeholderSrc={props.img_org + props.backdrop_path}
            className={classes.Recommend_image}
            alt={props.original_title}
            effect="blur"
            threshold={100}
            delayMethod="debounce"
            delayTime={300}
          />
          <div className={classes.border_card}>
            <h2>{props.original_title}</h2>
          </div>
        </Card>
      </Link>
    );
  }

  return <React.Fragment>{recommend}</React.Fragment>;
}

export default RecommendCard;
