import "./login-form.css";
import { Container,Col } from "react-bootstrap";

import Aos from "aos";
import "aos/dist/aos.css";
import { Loginquotes } from "../login-quotes/login-quotes";
import GoogleLogin from "react-google-login";

export const Loginform = () => {
  // use aos
  Aos.init();

  return (
    <div className="form_container">
      <Container>
          <div className="form_shadow d-flex justify-content-center align-items-center my-5">
              <Col className="d-flex justify-content-center text-center col-md-12 col-lg-12 col-xl-6">
                <form className="login_form">
                  <div className="text-start my-4 px-5 w-100">
                      <span className="login-form-title">LOG IN</span><br/>
                      <span className="login-form-title">Login to your account to watch movie and chill.</span>
                  </div>
                  <GoogleLogin
                    buttonText="Login"
                    cookiePolicy={"single_host_origin"}
                    style={{ marginTop: "100px" }}
                    isSignedIn={true}
                    className="gg_button"
                  />
                </form>
              </Col>
              <Col className="d-flex justify-content-center">
                <Loginquotes />
              </Col>
          </div>
      </Container>
    </div>
  );
};
