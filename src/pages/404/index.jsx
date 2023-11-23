import React from "react";
import { Link } from "react-router-dom";
import classes from "./style.module.css";

function NotFound() {
  return (
    <React.Fragment>
      <div
        className="d-flex justify-content-center flex-column align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <h1>404</h1>
          <p>oops ! Page not found</p>
          <p>
            Oops ! The page you are looking for does not exist.It might have
            been moved or deleted
          </p>
        </div>
        <div className="my-3">
          <Link to="/">
            <button className={classes.btn_infowatch}>Go back</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
