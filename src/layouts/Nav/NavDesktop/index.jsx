import React from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./style.module.css";
// route
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// logo
import logo from "../../../assets/images/layouts/nav/logo/logo.png";
// icons
import { FaUserAlt } from "react-icons/fa";
// hook

const NavDesktop = () => {
  return (
    <React.Fragment>
      <div>
        <div className="wrap">
          <Row className="d-flex flex-row justify-content-center align-items-center">
            <Col className="col-6">
              <div className={classes.nav_left}>
                <ul
                  className={`${classes.nav_list} d-flex flex-row justify-content-md-start align-items-center gap-3`}
                >
                  <li>
                    <Link to="/">
                      <img src={logo} className={classes.logo} alt="logo"></img>
                    </Link>
                  </li>
                  <li>
                    <NavLink to="/movie" activeClassName={classes.active}>
                      {" "}
                      Movies{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/tvshow" activeClassName={classes.active}>
                      TV Shows
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="col-6">
              <div className={classes.nav_right}>
                <ul
                  className={`${classes.nav_list} d-flex flex-row justify-content-md-end align-items-center gap-3`}
                >
                  <li>
                    <NavLink to="/search" activeClassName={classes.Active}>
                      {" "}
                      Search{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">
                      <FaUserAlt />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};
export default NavDesktop;
