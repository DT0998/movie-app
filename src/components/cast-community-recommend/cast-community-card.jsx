import React from "react";
import { Card } from "react-bootstrap";
import classes from './cast-community-card.module.css'
function CastCommunityCard(props) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default CastCommunityCard;
