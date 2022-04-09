import "./nav.css";
import logo from "../../assets/nav/logo/logo.svg";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaquery";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export const Nav = (props) => {
  const isTablet = useMediaQuery("(min-width:768px)");
  const [isActive, setIsActive] = useState(false);
  //   sticky nav
  const [scroll, setScroll] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  useEffect(() => {
    // scroll nav
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  },[]);
  // scroll nav
  const handlescroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  // open menu mobile
  const handleClick = () => setIsActive(!isActive);
  const closeMobileMenu = () => setIsActive(false);

  return (
    <Container className={`nav_fluid ${scroll && "sticky"} `} >
      {isTablet ? (
        //  desktop
        <div className="wrap_fluid">
          <div className="wrap">
            <Row className="d-flex flex-row justify-content-center">
              <Col className="col-6">
                <div className="nav_left h-100">
                  <ul className="container__list d-flex flex-row justify-content-md-start align-items-center gap-3 h-100">
                    <li>
                      <Link to="/">
                        <img src={logo} className="logo" alt="logo"></img>
                      </Link>
                    </li>
                    <li>
                      <Link to="/movie"> Movie </Link>
                    </li>
                    <li>
                      <Link to="/tvshow"> TV Show </Link>
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
                      <Link to="/account"> My Account </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      ) : (
        // mobile
        <div className="wrap_fluid">
          <div className="wrap">
            <Row className="d-flex flex-row justify-content-center">
              <Col className="col-6">
                <div className="nav_left h-100">
                  <ul className="container__list d-flex flex-row justify-content-md-start align-items-center gap-3 h-100">
                    <li>
                      <Link to="/">
                        <img src={logo} className="logo" alt="logo"></img>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col className="col-6">
                <div className="nav_right h-100">
                  <ul className="container__list d-flex flex-row justify-content-end align-items-center gap-3 h-100">
                    <li>
                      <MdClose onClick={() => setIsActive(true)} />
                      <FaBars onClick={() => setIsActive(false)} />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </Container>
  );
};
