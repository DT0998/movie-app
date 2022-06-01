import "./login.css";
import { Container, Col, Row } from "react-bootstrap";
import { Loginquotes } from "./login-quotes/login-quotes";
import { Loginform } from "./login-form/login-form";

function Login() {
  return (
    <Container className="form_shadow px-5">
      <div className="my-5">
        <Row className="d-flex flex-wrap justify-content-center align-items-center">
          <Col xs={12} className="text-center col-md-12 col-xl-12 col-xxl-6">
            <Loginform />
          </Col>
          <Col
            xs={0}
            className="d-flex justify-content-center login_quotes col-md-0 col-xl-0 col-xxl-6"
          >
            <Loginquotes />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Login;
