import React from "react";
import classes from "./style.module.css";

const ButtonSquare = (props) => {
  return (
    <React.Fragment>
      {props.type === "moreInfo" && (
        <button className={classes.btn_infowatch} {...props} />
      )}
      {props.type === "showMore" && (
        <button className={classes.btn_loadmore} {...props} />
      )}
    </React.Fragment>
  );
};
export default ButtonSquare;
