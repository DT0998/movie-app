import React from "react";
import classes from "./style.module.css";

const ButtonViewMore = () => {
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
export default ButtonViewMore;