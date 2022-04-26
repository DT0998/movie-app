import React from "react";
import { Link } from "react-router-dom";
import "./navmobile.css";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/nav/logo/logo.svg";

function NavMobile() {
  return (
    <React.Fragment>
      <div className="dropdown">
        <ul className="dropdown-content">
          <Link to="/movie">
            <li className="dropdown_title">Movies</li>
          </Link>
          <Link to="/tvshow" >
            <li className="dropdown_title">TV Shows</li>
          </Link>
          <Link to="/search">
            <li className="dropdown_title d-flex justify-content-between align-items-center">
              <div>Search</div>
              <FaSearch />
            </li>
          </Link>
          <Link to="/account">
            <li className="dropdown_title">My Account</li>
          </Link>
          <Link to="/">
            <div className="logo_border d-flex align-items-center">
            <img src={logo} className="logo" alt="logo"/>
            </div>
          </Link>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default NavMobile;
