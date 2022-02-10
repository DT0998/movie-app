import "./login-form.css";
import { Container,Col, Row } from "react-bootstrap";

import Aos from "aos";
import "aos/dist/aos.css";
import { Loginquotes } from "../login-quotes/login-quotes";
import GoogleLogin from "react-google-login";

export const Loginform = () => {
  // use aos
  Aos.init();

  return (
      <Container className="form_shadow px-5">
          <div className="my-5">
              <Row className="d-flex flex-nowrap justify-content-center align-items-center">
                <Col xs={12} className="text-center col-md-12 col-xl-6">
                  <form className="login_form px-md-5">
                    <div className="text-xl-start text-md-center my-4 px-md-5">
                    <div><label className="login-form-title" >Login</label></div>
                    <div><label className="login-form-title">Login watch and chill movie</label></div>
                    <div>
                      <GoogleLogin
                        buttonText="Login"
                        cookiePolicy={"single_host_origin"}
                        style={{ marginTop: "100px" }}
                        isSignedIn={true}
                        className="gg_button"
                      />
                    </div>
                    </div>
                  </form>
                </Col>
                <Col xs={0} className="d-flex justify-content-center login_quotes col-md-0">
                  <Loginquotes />
                </Col>
              </Row>
          </div>
      </Container>
  );
};
