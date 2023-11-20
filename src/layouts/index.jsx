import React, { useCallback, useEffect, useState } from "react";
import classes from "./style.module.css";
import Footer from "./Footer";
import { AiOutlineArrowUp } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import useMediaQuery from "../hooks/useMediaquery";
import NavDesktop from "../layouts/Nav/NavDesktop";
import NavMobile from "./Nav/NavMobile";
import { MdClose } from "react-icons/md";
import { Col, Container, Row } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

function Layout(props) {
  const { children } = props;
  const isTablet = useMediaQuery("(min-width:768px)");
  const [isShowScrollTop, setIsShowScrollTop] = useState(false);
  const [isNavScroll, setIsNavScroll] = useState(false);
  // nav mobile
  const [isOpenNavMobile, setIsOpenNavMobile] = useState(false);
  // overlay
  const [isOpenNavOverlay, setIsOpenOverlay] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleEventScrollNav = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 20) {
      setIsNavScroll(true);
    } else {
      setIsNavScroll(false);
    }
  }, []);

  // scroll btn to top
  const handleEventScrollToTop = useCallback(() => {
    const offset = window.scrollY;
    // Convert the number to a string
    const offsetString = offset.toString();
    // Extract the first four characters of the string
    const firstFourDigitsString = offsetString.substring(0, 4);
    // Convert the extracted string to an integer
    const firstFourDigitsOffset = parseInt(firstFourDigitsString, 10);
    // detect page height
    const pageHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    // show scroll to top button
    if (firstFourDigitsOffset >= pageHeight - 100) {
      setIsShowScrollTop(true);
    } else {
      setIsShowScrollTop(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleEventScrollToTop);
    window.addEventListener("scroll", handleEventScrollNav);
    return () => {
      window.removeEventListener("scroll", handleEventScrollToTop);
      window.removeEventListener("scroll", handleEventScrollNav);
    };
  }, [handleEventScrollNav, handleEventScrollToTop]);

  const handleCloseNavMobile = () => {
    setIsOpenNavMobile(false);
  };

  return (
    <React.Fragment>
      {/* toast container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
      <Container
        className={`${classes.nav_fluid} ${isNavScroll && classes.sticky}`}
      >
        {isTablet ? (
          // nav desktop
          <NavDesktop />
        ) : (
          // nav mobile
          <React.Fragment>
            {isOpenNavOverlay && isOpenNavMobile && (
              <div className={classes.overlay} />
            )}
            <div className="wrap_fluid">
              <div className="wrap">
                <Row className={`d-flex flex-row justify-content-center`}>
                  <Col className="col-12">
                    <div className={`${classes.nav_left}`}>
                      <ul
                        className={`${classes.nav_list} d-flex flex-row justify-content-start align-items-center gap-3`}
                      >
                        {!isOpenNavMobile ? (
                          <FaBars
                            className={classes.icons_menu}
                            onClick={() => {
                              setIsOpenNavMobile(true);
                              setIsOpenOverlay(true);
                            }}
                          />
                        ) : (
                          <MdClose
                            className={classes.icons_menu}
                            onClick={() => {
                              setIsOpenNavMobile(false);
                              setIsOpenOverlay(false);
                            }}
                          />
                        )}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <NavMobile
              open={isOpenNavMobile}
              close={handleCloseNavMobile}
              isNavScroll={isNavScroll}
            />
          </React.Fragment>
        )}
      </Container>
      <main>{children}</main>
      {/* scroll to top button */}
      <React.Fragment>
        <div
          className={` d-flex align-items-center justify-content-center ${
            classes.scrolltotop_container
          } ${isShowScrollTop ? classes.active : classes.inactive}`}
          onClick={handleScrollToTop}
        >
          <AiOutlineArrowUp className={classes.arrow} />
        </div>
      </React.Fragment>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
