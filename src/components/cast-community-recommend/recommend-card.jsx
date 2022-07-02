import React from "react";
import classes from './recommend-card.module.css'
// route
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function RecommendCard(props) {
  return (
    <React.Fragment>
      
      <Link to={`/${props.type}/${props.linkto}`}>
        <Card
          className={classes.Recommend_card}
          style={{
            backgroundImage: `url(${props.img_org + props.backdrop_path
              })`,
          }}
        >
          <div className={classes.border_card}>
            <h2>{props.original_title}</h2>
            <h2>{props.original_name}</h2>
          </div>
        </Card>
      </Link>
    </React.Fragment>
  );
}

export default RecommendCard;
