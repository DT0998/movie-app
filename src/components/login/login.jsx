import "./login.css";
import { Container, Col, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { Loginquotes } from "./login-quotes/login-quotes";
import { Loginform } from "./login-form/login-form";

function Login() {
  // use aos
  Aos.init();
  return (
    <Container className="form_shadow px-5">
      <div className="my-5">
        <Row className="d-flex flex-nowrap justify-content-center align-items-center">
          <Col xs={12} className="text-center col-md-12 col-xl-6">
            <Loginform />
          </Col>
          <Col
            xs={0}
            className="d-flex justify-content-center login_quotes col-md-0"
          >
            <Loginquotes />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Login;
