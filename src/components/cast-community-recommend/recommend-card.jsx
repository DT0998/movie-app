import React from "react";
import classes from "./recommend-card.module.css";
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
        <Card
          className={classes.Recommend_card}
          style={{
            backgroundImage: `url(${props.img_org + props.backdrop_path})`,
          }}
        >
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
