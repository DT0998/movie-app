import classes from "./loading.module.css";
import React from "react";

export const Loading = (props) => {
  return (
    <React.Fragment>
      {props.type === "fullscreen" && 
       <div className={`${classes.loading} d-flex justify-content-center align-items-center`}>
          <div className={classes.loader}></div>
        </div>}
    </React.Fragment>
  );
};
