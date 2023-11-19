import React, { useEffect, useState } from "react";
import classes from "./style.module.css";
import Footer from "./Footer";
import Nav from "../layouts/nav/nav-desktop";
import { AiOutlineArrowUp } from "react-icons/ai";

function Layout({ children }) {
  const [isHide, setIsHide] = useState(false);
  // click to top
  const clickToTopHandle = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  // scroll btn to top
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 2000) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
  };

  useEffect(() => {
    clickToTopHandle();
    //  hide btn scroll to top
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      <Nav />
      <main>{children}</main>
      {/* scroll to top button */}
      <React.Fragment>
        <div
          className={` d-flex align-items-center justify-content-center ${
            classes.scrolltotop_container
          } ${isHide ? classes.active : classes.inActive}`}
          onClick={clickToTopHandle}
        >
          <AiOutlineArrowUp className={classes.arrow} />
        </div>
      </React.Fragment>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
