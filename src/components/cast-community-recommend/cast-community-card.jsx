import React from "react";
import { Card } from "react-bootstrap";
import classes from "./cast-community-card.module.css";
function CastCommunityCard(props) {
  let castCommunity;
  if (props.profile_path === null) {
    return null;
  } else {
    castCommunity = (
      <Card
        className={classes.CastCommunity_card}
        style={{
          backgroundImage: `url(${props.img_url + props.profile_path})`,
        }}
      >
        <div className={classes.border_card}>
          <h2>{props.peoplename}</h2>
        </div>
      </Card>
    );
  }
  return <React.Fragment>{castCommunity}</React.Fragment>;
}

export default CastCommunityCard;
