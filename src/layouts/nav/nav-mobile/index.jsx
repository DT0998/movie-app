import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/layouts/nav/logo/logo.png";
import classes from "./nav-mobile.module.css";
// route
import { Link } from "react-router-dom";
// icon
import { FaSearch } from "react-icons/fa";

function NavMobile({ open }) {
  // state scroll nav mobile
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    // scroll nav mobile
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);
  // scroll nav mobile
  const handlescroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  return (
    <React.Fragment>
      <div
        className={`${classes.dropDown} ${
          open ? classes.Active : classes.inActive
        }`}
        open={open}
      >
        <ul
          className={`${classes.dropDown_content} ${
            open ? classes.Active_content : classes.inActive_content
          }`}
          open={open}
        >
          <Link to="/movie">
            <li className={classes.dropDown_title}>Movies</li>
          </Link>
          <Link to="/tvshow">
            <li className={classes.dropDown_title}>TV Shows</li>
          </Link>
          <Link to="/search">
            <li
              className={`${classes.dropDown_title} d-flex justify-content-between align-items-center`}
            >
              <div>Search</div>
              <FaSearch />
            </li>
          </Link>
          <Link to="/account">
            <li className={classes.dropDown_title}>My Account</li>
          </Link>
          <div
            className={
              isScroll ? classes.Active_blankSpace : classes.inActive_blankSpace
            }
          />
          <Link to="/">
            <div
              className={` d-flex align-items-center justify-content-center ${
                isScroll ? classes.logo_scroll : classes.logo_noscroll
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
