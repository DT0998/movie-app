import React from "react";

function CastCommunityTitle(props) {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <h1 data-aos="fade-right" data-aos-duration="1500">
          {props.titlemain}
        </h1>
      </div>
    </React.Fragment>
  );
}

export default CastCommunityTitle;
