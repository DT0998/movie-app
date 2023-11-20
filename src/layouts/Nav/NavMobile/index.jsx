import React from "react";
import logo from "../../../assets/images/layouts/nav/logo/logo.png";
import classes from "./style.module.css";
// route
import { Link } from "react-router-dom";
// icon
import { FaSearch } from "react-icons/fa";

function NavMobile(props) {
  const { open, close, isNavScroll } = props;
  return (
    <React.Fragment>
      <div
        className={`${classes.dropdown} ${
          open ? classes.active : classes.inactive
        }`}
        open={open}
      >
        <ul
          className={`${classes.dropDown_content} ${
            open ? classes.active_content : classes.inactive_content
          }`}
          open={open}
        >
          <Link to="/movie" onClick={close}>
            <li className={classes.dropdown_title}>Movies</li>
          </Link>
          <Link to="/tvshow" onClick={close}>
            <li className={classes.dropdown_title}>TV Shows</li>
          </Link>
          <Link to="/search" onClick={close}>
            <li
              className={`${classes.dropdown_title} d-flex justify-content-between align-items-center`}
            >
              <div>Search</div>
              <FaSearch />
            </li>
          </Link>
          <Link to="/login" onClick={close}>
            <li className={classes.dropdown_title}>My Account</li>
          </Link>
          <Link to="/" onClick={close}>
            <div
              className={` d-flex align-items-center justify-content-center ${
                isNavScroll ? classes.logo_scroll : classes.logo_noscroll
              }`}
            >
              <img src={logo} className={classes.logo} alt="logo" />
            </div>
          </Link>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default NavMobile;
