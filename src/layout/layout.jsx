import React from "react";
import ButtonScrollTop from "../components/buttons/button-scrolltop/button-scrolltotop";
import { Footer } from "./footer/footer";
import { Nav } from "./nav/nav";

function Layout({ children }) {
  return (
    <React.Fragment>
        <Nav/>
        <main>{children}</main>
        <ButtonScrollTop/>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
