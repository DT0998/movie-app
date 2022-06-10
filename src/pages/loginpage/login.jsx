import React, { useEffect } from "react";
import Login from "../../components/login/login";
export const Loginpage = () => {
  // change title
  useEffect(() => {
    document.title = "Login";
  }, [])
  
  return (
    <React.Fragment>
      <Login />
    </React.Fragment>
  );
};
