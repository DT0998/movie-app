import React from "react";
import classes from "./login.module.css";
// lazy image
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
// component
import { Loginform } from "./login-form";
import { Loginquotes } from "./login-quotes";

function Login() {
  return (
    <React.Fragment>
      <div className={classes.form_container}>
        <div className={`my-5 ps-xl-5 ${classes.form_shadow}`}>
          <Row className="d-flex flex-wrap justify-content-center align-items-center">
            <Col xs={12} className="text-center col-md-12 col-xl-12 col-xxl-6">
              <Loginform />
            </Col>
            <Col
              xs={0}
              className="d-flex justify-content-center col-md-0 col-xl-0 col-xxl-6"
            >
              <LazyLoadComponent placeholder={<Spinner />}>
                <Loginquotes />
              </LazyLoadComponent>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
