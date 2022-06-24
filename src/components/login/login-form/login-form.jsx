import React from "react";
import classes from "./login-form.module.css";
// login google
import GoogleLogin from "react-google-login";

export const Loginform = () => {
  return (
    <form>
      <div className={`${classes.loginForm} px-md-5`}>
      <div className="text-xxl-start text-xl-center text-lg-center my-4 px-md-5 d-flex flex-column">
        <label className={classes.loginForm_title}>Login</label>
        <label className={classes.loginForm_content}>
          Login watch and chill movie
        </label>
        <div>
          <GoogleLogin
            buttonText="Login"
            cookiePolicy={"single_host_origin"}
            style={{ marginTop: "100px" }}
            isSignedIn={true}
            className={classes.btn_google}
          />
        </div>
      </div>
      </div>
    </form>
  );
};
