import React from "react";
import { Link } from "react-router-dom";
import "./navmobile.css";
import { FaSearch } from "react-icons/fa";
function NavMobile() {
  return (
    <React.Fragment>
      <div className="dropdown">
        <ul className="dropdown-content">
          <Link to="/movie-app/movie">
            <li className="dropdown_title">Movie</li>
          </Link>
          <Link to="/movie-app/tvshow" >
            <li className="dropdown_title">TV Shows</li>
          </Link>
          <Link to="/movie-app/search">
            <li className="dropdown_title d-flex justify-content-between align-items-center">
              <div>Search</div>
              <FaSearch />
            </li>
          </Link>
          <Link to="/movie-app/account">
            <li className="dropdown_title">My Account</li>
          </Link>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default NavMobile;
