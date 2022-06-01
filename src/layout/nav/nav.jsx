import "./nav.css";
import logo from "../../assets/nav/logo/logo.svg";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaquery";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import NavMobile from "./navmobile";

export const Nav = ({ActiveTrailer}) => {
  const isTablet = useMediaQuery("(min-width:768px)");
  //   sticky nav
  const [scroll, setScroll] = useState(false);
  // nav mobile
  const [isOpenNavMobile, setIsOpenNavMobile] = useState(false);
  // overlay
  const [isOpenNavOverlay, setIsOpenOverlay] = useState(false);
  useEffect(() => {
    // scroll nav
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);
  // scroll nav
  const handlescroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScroll(true);
      setIsOpenOverlay(true);
    } else {
      setScroll(false);
      setIsOpenOverlay(false);
    }
  };

  return (
    <React.Fragment>
      {isTablet ? (
        //  desktop
        <Container className={`nav_fluid ${scroll && ActiveTrailer && "sticky"}`} ActiveTrailer={ActiveTrailer} >
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
                        <Link to="/movie"> Movies </Link>
                      </li>
                      <li>
                        <Link to="/tvshow"> TV Shows </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col className="col-6">
                  <div className="nav_right h-100">
                    <ul className="container__list d-flex flex-row justify-content-md-end align-items-center gap-3 h-100">
                      <li>
                        <Link to="/search"> Search </Link>
                      </li>
                      <li>
                        <Link to="/account">
                          <FaUserAlt />
                        </Link>
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
            <div className="overlay" data-aos="fade-zoom-in"></div>
          )}
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
            {isOpenNavMobile && <NavMobile setIsOpenNav={setIsOpenNavMobile} />}
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
