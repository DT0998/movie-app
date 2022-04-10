import React from "react";
import { Link } from "react-router-dom";
import { Buttonsquare } from "../buttons/button-square/button-square";

function NotFound() {
  return (
    <React.Fragment>
      <Link to="/">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="text-center">
            <h1>404</h1>
            <p>oops ! Page not found</p>
            <p>Oops ! The page you are looking for does not exist.It might have been moved or deleted</p>
          </div>
          <div>
            <Buttonsquare title="Go back" className="btn_info_watch my-3" />
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}

export default NotFound;
