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
      <ul
        className={`${classes.dropdown} ${
          open ? classes.active : classes.inactive
        } d-flex flex-column justify-content-between`}
        open={open}
        style={{height: isNavScroll ? "calc(100vh - 58px)" : "calc(100vh - 50px)"}}
      >
        <div>
          <Link to="/movie" onClick={close}>
            <li className={`${classes.dropdown_title} py-2 px-2`}>Movies</li>
          </Link>
          <Link to="/tvshow" onClick={close}>
            <li className={`${classes.dropdown_title} py-2 px-2`}>TV Shows</li>
          </Link>
          <Link to="/search" onClick={close}>
            <li
              className={`${classes.dropdown_title} d-flex justify-content-between align-items-center py-2 px-2`}
            >
              <div>Search</div>
              <FaSearch />
            </li>
          </Link>
          <Link to="/login" onClick={close}>
            <li className={`${classes.dropdown_title} py-2 px-2`}>
              My Account
            </li>
          </Link>
        </div>
        <div className={`d-flex align-items-center justify-content-center`}>
          <Link to="/" onClick={close}>
            <img
              src={logo}
              alt="logo"
              style={{ height: "50px", width: "50px" }}
              className="py-4"
            />
          </Link>
        </div>
      </ul>
    </React.Fragment>
  );
}

export default NavMobile;
