import React from 'react';
import classes from './button-square.module.css';

export const Buttonsquare = (props) => {
  return (
    <React.Fragment>
      {props.type === "moreInfo" && <button className={props.className} onClick={props.onClick}>{props.title}</button>} 
      {props.type === "loadMore" && <button className={classes.btn_loadmore} onClick={props.onClick}>{props.title}</button>}
    </React.Fragment>
  );
};
