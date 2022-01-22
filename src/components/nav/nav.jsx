import './nav.css';
import logo from '../../assets/nav/logo/logo.svg';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';



export const Nav = () => {
    //   sticky nav
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0);
        });
    }, []);


    return (
        <Container className={`${scroll ? "sticky" : ""} nav_fluid`}>
            <div className="wrap_fluid">
                <div className="wrap">
                    <Row className="d-flex flex-row justify-content-center">
                        <Col className='col-lg-6'>
                            <div className="nav_left h-100">
                                <ul className="container__list d-flex flex-row justify-content-md-start align-items-center gap-lg-3 h-100">
                                    <li><a href='/'><img src={logo} className="logo" alt=''></img></a></li>
                                    <li><a href='/'>TV Show</a></li>
                                    <li><a href='/'>Movie</a></li>
                                </ul>
                            </div>
                        </Col>

                        <Col className="col-lg-6">
                            <div className="nav_right h-100" >
                                <ul className="container__list d-flex flex-row justify-content-md-end align-items-center gap-lg-3 h-100">
                                    <li><a href='/'>Search</a></li>
                                    <li><a href='/'>My Account</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
};