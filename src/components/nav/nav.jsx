import "./nav.css";
import logo from "../../assets/nav/logo/logo.svg";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";


export const Nav = () => {
    //   sticky nav
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY >= 100);
        });
    });

    return (
        <Container className={`nav_fluid ${scroll ? "sticky" : "nav_fluid"}`}>
            <div className="wrap_fluid">
                <div className="wrap">
                    <Row className="d-flex flex-row justify-content-center">
                        <Col className="col-6">
                            <div className="nav_left h-100">
                                <ul className="container__list d-flex flex-row justify-content-md-start align-items-center gap-3 h-100">
                                    <li>
                                        <a href="/">
                                            <img src={logo} className="logo" alt="logo"></img>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/movie">Movie</a>
                                    </li>
                                    <li>
                                        <a href="/tvshow">TV Show</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="col-6">
                            <div className="nav_right h-100">
                                <ul className="container__list d-flex flex-row justify-content-md-end align-items-center gap-3 h-100">
                                    <li>
                                        <a href="/search">Search</a>
                                    </li>
                                    <li>
                                        <a href="/account">My Account</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
};
