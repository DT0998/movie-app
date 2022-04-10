import React from "react";

function CastCommunitySimilarTitle(props) {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <h1 data-aos="fade-right">
          {props.titlemain}
        </h1>
      </div>
    </React.Fragment>
  );
}

export default CastCommunitySimilarTitle;
