import React from "react";
import { Card } from "react-bootstrap";
import './cast-community-body.css'
function CastCommunityBody(props) {
  return (
    <React.Fragment>
      <Card
        className={props.classNameCard}
        style={{
          backgroundImage: `url(${props.img_url + props.profile_path})`,
        }}
      >
        <div className={props.classNamepeople}>
          <h2>{props.peoplename}</h2>
        </div>
      </Card>
    </React.Fragment>
  );
}

export default CastCommunityBody;
