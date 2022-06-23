import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './cast-community-similar-body.css'
function SimilarBody(props) {
  return (
    <React.Fragment>
      <Link to={`/${props.type}/${props.linkto}`}>
        <Card
          className={props.classNameCard}
          style={{
            backgroundImage: `url(${props.img_org + props.backdrop_path
              })`,
          }}
        >
          <div className={props.classNameTitle}>
            <h2>{props.original_title}</h2>
            <h2>{props.original_name}</h2>
          </div>
        </Card>
      </Link>
    </React.Fragment>
  );
}

export default SimilarBody;
