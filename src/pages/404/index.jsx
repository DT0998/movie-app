import React from "react";
import { Link } from "react-router-dom";
import ButtonBack from "../../components/Button/ButtonSquare";

function NotFound() {
  return (
    <React.Fragment>
      <Link to="/">
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
            <ButtonBack type="moreInfo">Go back</ButtonBack>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}

export default NotFound;
