import "./logn-form.css";
import { Container, Row, Col } from "react-bootstrap";

import Aos from "aos";
import "aos/dist/aos.css";
import { Loginquotes } from "../login-quotes/login-quotes";

export const Loginform = () => {
  // use aos
  Aos.init();

  return (
    
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col>
            <Loginquotes/>
          </Col>
          <Col>
            <div className="login_form">form</div>
          </Col>
        </Row>
      </Container>
  
  );
};
