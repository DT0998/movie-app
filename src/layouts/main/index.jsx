import React from "react";
import ButtonScrollTop from "../../components/buttons/button-scrolltop";
import { Footer } from "../footer/footer";
import { Header } from "../header/header-desktop";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <ButtonScrollTop />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
