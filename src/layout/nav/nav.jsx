import classes from "./nav.module.css";
import logo from "../../assets/nav/logo/logo.svg";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaquery";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import NavMobile from "./navmobile";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const isTablet = useMediaQuery("(min-width:768px)");
  //   sticky nav
  const [scroll, setScroll] = useState(false);
  // nav mobile
  const [isOpenNavMobile, setIsOpenNavMobile] = useState(false);
  // overlay
  const [isOpenNavOverlay, setIsOpenOverlay] = useState(false);
  // transparent nav when scroll
  const [isTransparentNav, setIsTransparentNav] = useState(false);

  // scroll nav
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScroll(true);
      setIsOpenOverlay(true);
      setIsTransparentNav(false);
    } else {
      setScroll(false);
      setIsOpenOverlay(false);
      setIsTransparentNav(true);
    }
    // transparent nav
    setTimeout(() => {
      setIsTransparentNav(true);
    }, 2000);
  };

  useEffect(() => {
    // listen scroll handle
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      {isTablet ? (
        //  desktop
        <Container
          className={`${classes.nav_fluid} ${scroll && classes.sticky}`}
          style={{ opacity: isTransparentNav ? "1" : "0" }}
        >
          <div className="wrap_fluid">
            <div className="wrap">
              <Row className="d-flex flex-row justify-content-center nav_container">
                <Col className="col-6">
                  <div className="nav_left h-100">
                    <ul className="container__list d-flex flex-row justify-content-md-start align-items-center gap-3 h-100">
                      <li>
                        <Link to="/">
                          <img src={logo} className="logo" alt="logo"></img>
                        </Link>
                      </li>
                      <li>
                        <NavLink to="/movie" activeClassName="is-active"> Movies </NavLink>
                      </li>
                      <li>
                        <NavLink to="/tvshow" activeClassName="is-active"> TV Shows </NavLink>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col className="col-6">
                  <div className="nav_right h-100">
                    <ul className="container__list d-flex flex-row justify-content-md-end align-items-center gap-3 h-100">
                      <li>
                        <NavLink to="/search" activeClassName="is-active"> Search </NavLink>
                      </li>
                      <li>
                        <NavLink to="/account" activeClassName="is-active">
                          <FaUserAlt />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      ) : (
        // mobile
        <React.Fragment>
          {isOpenNavOverlay && isOpenNavMobile && <div className="overlay" />}
          <Container className={`nav_fluid ${scroll && "sticky"}`}>
            <div className="wrap_fluid">
              <div className="wrap">
                <Row className="d-flex flex-row justify-content-center nav_container">
                  <Col className="col-12">
                    <div className="nav_left h-100">
                      <ul className="container__list d-flex flex-row justify-content-start align-items-center gap-3 h-100">
                        {!isOpenNavMobile ? (
                          <FaBars
                            className="icons_menu"
                            onClick={() => {
                              setIsOpenNavMobile(true);
                              setIsOpenOverlay(true);
                            }}
                          />
                        ) : (
                          <MdClose
                            className="icons_menu"
                            onClick={() => {
                              setIsOpenNavMobile(false);
                              setIsOpenOverlay(false);
                            }}
                          />
                        )}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <NavMobile open={isOpenNavMobile} />
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
