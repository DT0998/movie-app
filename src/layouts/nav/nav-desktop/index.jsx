import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavMobile from "../nav-mobile";
import classes from "./nav-desktop.module.css";
// route
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// logo
import logo from "../../../assets/images/layouts/nav/logo/logo.png";
// icons
import { FaBars, FaUserAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
// hook
import useMediaQuery from "../../../hooks/useMediaquery";

const NavDesktop = () => {
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
              <Row className="d-flex flex-row justify-content-center align-items-center">
                <Col className="col-6">
                  <div className={classes.nav_left}>
                    <ul
                      className={`${classes.nav_list} d-flex flex-row justify-content-md-start align-items-center gap-3`}
                    >
                      <li>
                        <Link to="/">
                          <img
                            src={logo}
                            className={classes.logo}
                            alt="logo"
                          ></img>
                        </Link>
                      </li>
                      <li>
                        <NavLink to="/movie" activeClassName={classes.Active}>
                          {" "}
                          Movies{" "}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/tvshow" activeClassName={classes.Active}>
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
                        <NavLink to="/account">
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
          {isOpenNavOverlay && isOpenNavMobile && (
            <div className={classes.overlay} />
          )}
          <Container
            className={`${classes.nav_fluid} ${scroll && classes.sticky}`}
          >
            <div className="wrap_fluid">
              <div className="wrap">
                <Row className={`d-flex flex-row justify-content-center`}>
                  <Col className="col-12">
                    <div className={`${classes.nav_left}`}>
                      <ul
                        className={`${classes.nav_list} d-flex flex-row justify-content-start align-items-center gap-3`}
                      >
                        {!isOpenNavMobile ? (
                          <FaBars
                            className={classes.icons_menu}
                            onClick={() => {
                              setIsOpenNavMobile(true);
                              setIsOpenOverlay(true);
                            }}
                          />
                        ) : (
                          <MdClose
                            className={classes.icons_menu}
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
export default NavDesktop;