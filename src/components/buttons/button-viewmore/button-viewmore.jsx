import React from "react";
import classes from "./button-viewmore.module.css";

export const Buttonviewmore = () => {
  
  return (
    <React.Fragment>
      <button
        className={`${classes.btn_view}`}
      >
        <span className={classes.circle} aria-hidden="true">
          <span className={`${classes.arrow}`}></span>
        </span>
        <span className={classes.btn_text}>View More</span>
      </button>
    </React.Fragment>
  );
};
