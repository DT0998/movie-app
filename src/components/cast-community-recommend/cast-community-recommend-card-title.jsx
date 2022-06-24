import React from "react";

function CastCommunityRecommendTitle(props) {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <h3>
          {props.titlemain}
        </h3>
      </div>
    </React.Fragment>
  );
}

export default CastCommunityRecommendTitle;
