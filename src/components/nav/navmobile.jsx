import React from "react";
import { Link } from "react-router-dom";
import "./navmobile.css";
import { FaSearch } from "react-icons/fa";
function NavMobile(props) {
  return (
    <React.Fragment>
      <div className="dropdown">
        <ul className="dropdown-content">
          <Link to="/movie">
            <li className="dropdown_title">Movie</li>
          </Link>
          <Link to="/tvshow">
            <li className="dropdown_title">TV Shows</li>
          </Link>
          <Link to="/search">
            <li className="dropdown_title d-flex justify-content-between">
              <div>Search</div>
              <FaSearch />
            </li>
          </Link>
          <Link to="/account">
            <li className="dropdown_title">My Account</li>
          </Link>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default NavMobile;
