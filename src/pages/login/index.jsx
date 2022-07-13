import React, { useEffect } from "react";
import Login from "../../components/login";
const LoginPage = () => {
  // change title
  useEffect(() => {
    document.title = "Login";
  }, []);

  return <Login />;
};
export default LoginPage;