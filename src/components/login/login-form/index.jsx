import React, { useState } from "react";
import classes from "./login-form.module.css";
import axios from "axios";
// login google
import GoogleLogin from "react-google-login";

export const Loginform = () => {
  const initialDataLogin = localStorage.getItem("loginData")
    ? JSON.parse(localStorage.getItem("loginData"))
    : null;
  const [loginData, setLoginData] = useState(initialDataLogin);
  const handleFailure = (response) => {
    alert(response);
  };
  const handleSuccess = async (googleData) => {
    const response = await axios.post("/api/login", {
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setLoginData(data);
  };
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };
  return (
    <form>
      <div className={`${classes.loginForm} px-md-5`}>
        <div className="text-xxl-start text-xl-center text-lg-center my-4 px-md-5 d-flex flex-column">
          <label className={classes.loginForm_title}>Login</label>
          <label className={classes.loginForm_content}>
            Login watch and chill movie
          </label>
          {loginData ? (
            <div>
              <h3>You logged in as {loginData.email}</h3>
              <button onClick={handleLogout}></button>
            </div>
          ) : (
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={handleSuccess}
              onFailure={handleFailure}
              buttonText="Login"
              isSignedIn={true}
              className={classes.btn_google}
            />
          )}
        </div>
      </div>
    </form>
  );
};
