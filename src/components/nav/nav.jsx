import "./nav.css";
import logo from "../../assets/nav/logo/logo.svg";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaquery";
import { FaBars, } from "react-icons/fa";

export const Nav = () => {
    const isTablet = useMediaQuery("(min-width:768px)");
    const [Active, setActive] = useState(false)
    //   sticky nav
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY >= 100);
        });
    });

    return (
        <Container className={`nav_fluid ${scroll ? "sticky" : "nav_fluid"}`}>
            {isTablet ?
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
                </div> :
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
                                        {/* <li>
                                            <Link to="/movie"> Movie </Link>
                                        </li>
                                        <li>
                                            <Link to="/tvshow"> TV Show </Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </Col>
                            <Col className="col-6">
                                <div className="nav_right h-100">
                                    <ul className="container__list d-flex flex-row justify-content-end align-items-center gap-3 h-100">
                                        <li>
                                            <FaBars/>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            }
        </Container>
    );
};
