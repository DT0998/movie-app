import React from "react";
import { Container } from "react-bootstrap";

function CastCommunityRecommendTitle(props) {
  return (
    <React.Fragment>
      <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h3>
          {props.titlemain}
        </h3>
      </div>
      </Container>
    </React.Fragment>
  );
}

export default CastCommunityRecommendTitle;
