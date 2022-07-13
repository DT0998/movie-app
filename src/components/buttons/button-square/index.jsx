import React from "react";
import classes from "./button-square.module.css";

const ButtonSquare = (props) => {
  return (
    <React.Fragment>
      {props.type === "moreInfo" && (
        <button className={classes.btn_info_watch} onClick={props.onClick}>
          {props.title}
        </button>
      )}
      {props.type === "showMore" && (
        <button className={classes.btn_loadmore} onClick={props.onClick}>
          {props.title}
        </button>
      )}
    </React.Fragment>
  );
};
export default ButtonSquare;
