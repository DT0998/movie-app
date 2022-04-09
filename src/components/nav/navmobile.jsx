import React from "react";
import { Link } from "react-router-dom";
import "./navmobile.css";

function NavMobile(props) {
  return (
    <React.Fragment>
      <div className="dropdown">
        <ul className="dropdown-content">
          <li className="dropdown_title">
            <Link to="/movie"> Movie </Link>
          </li>
          <li className="dropdown_title">
            <Link to="/tvshow"> TV Shows </Link>
          </li>
          <li className="dropdown_title">
            <Link to="/search"> Search </Link>
          </li>
          <li className="dropdown_title">
            <Link to="/account"> My Account </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default NavMobile;
