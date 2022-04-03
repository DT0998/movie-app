import React from "react";
import Login from "../../components/login/login";
export const Loginpage = () => {
  // change title
  document.title = "Login";
  return (
    <React.Fragment>
      <Login />
    </React.Fragment>
  );
};
