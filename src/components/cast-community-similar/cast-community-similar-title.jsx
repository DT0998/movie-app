import React from "react";

function CastCommunitySimilarTitle(props) {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <h3 data-aos="fade-right">
          {props.titlemain}
        </h3>
      </div>
    </React.Fragment>
  );
}

export default CastCommunitySimilarTitle;
