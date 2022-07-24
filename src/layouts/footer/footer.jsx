import classes from "./footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
// logo
import logo from "../../assets/images/layouts/footer/logo.png";
// icon
import { FaDiscord, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`wrap_fluid ${classes.footer}`}>
      <Container>
        <Row>
          <Col>
            <div className="wrap text-center">
              <a href="/">
                <img src={logo} className={classes.logo} alt="logo"></img>
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="text-center">
              <a
                href="https://github.com/DT0998"
                target="_blank"
                rel="noreferrer"
                className={classes.inActive_icons}
              >
                <FaGithub
                  alt="github"
                  className={`${classes.logo_social} ${classes.logo_github}`}
                />
              </a>
              <FaDiscord
                alt="discord"
                className={`${classes.logo_social} ${classes.logo_discord}`}
              />
              <FaFacebook
                alt="facebook"
                className={`${classes.logo_social} ${classes.logo_facebook}`}
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className=" d-flex justify-content-center flex-md-row flex-column gap-2 text-center my-lg-1">
              <span className={classes.contact}>ĐIỀU KHOẢN DỊCH VỤ</span>
              <span className={classes.contact}>DCMA</span>
              <span className={classes.contact}>LIÊN HỆ</span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="text-center my-lg-1">
              <span className={classes.copyright}>
                &copy; 2021 Movie and Chill
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;