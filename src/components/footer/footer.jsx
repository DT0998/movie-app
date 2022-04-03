import "./footer.css";
import logo from "../../assets/footer/logo.svg";
import { FaDiscord,FaGithub,FaFacebook } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
    return (
        <div className="wrap_fluid footer">
            <Container>
                <Row>
                    <Col>
                        <div className="wrap">
                            <a href="/">
                                <img src={logo} className="logo" alt="logo"></img>
                            </a>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="text-center">
                            <FaGithub
                                alt="github"
                                className="logo_social logo_github"
                            />
                            <FaDiscord
                                alt="discord"
                                className="logo_social logo_discord"
                            />
                            <FaFacebook
                                alt="facebook"
                                className="logo_social logo_facebook"
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="text-center my-lg-1">
                            <span className="contract">ĐIỀU KHOẢN DỊCH VỤ</span>
                            <span className="contract">DCMA</span>
                            <span className="contract">LIÊN HỆ</span>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="text-center my-lg-1">
                            <span className="copyright">&copy; 2021 Movie and Chill</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
