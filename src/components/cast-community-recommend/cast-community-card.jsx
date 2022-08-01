import React from "react";
import classes from "./cast-community-card.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Card } from "react-bootstrap";
function CastCommunityCard(props) {
  let castCommunity;
  if (props.profile_path === null) {
    return null;
  } else {
    castCommunity = (
      <Card className={classes.CastCommunity_card}>
        <LazyLoadImage
          src={props.img_url + props.profile_path}
          placeholderSrc={props.img_url + props.profile_path}
          className={classes.CastCommunity_image}
          alt={props.peoplename}
          effect="blur"
          threshold={100}
          delayMethod="debounce"
          delayTime={300}
        />
        <div className={classes.border_card}>
          <h2>{props.peoplename}</h2>
        </div>
      </Card>
    );
  }
  return <React.Fragment>{castCommunity}</React.Fragment>;
}

export default CastCommunityCard;
