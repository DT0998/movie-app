import React from "react";
import GoogleLogin from "react-google-login";

export const Loginform = () => {
  return (
    <form className="login_form px-md-5">
      <div className="text-xxl-start text-xl-center text-lg-center my-4 px-md-5 d-flex flex-column">
          <label className="login-form-title">Login</label>
          <label className="login-form-content">
            Login watch and chill movie
          </label>
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
  );
};
