import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import classes from "./button-scrolltotop.module.css";
function ButtonScrollTop() {
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
      <div
        className={` d-flex align-items-center justify-content-center ${
          classes.btn_scrolltoTop
        } ${isHide ? classes.Active : classes.inActive}`}
        onClick={clickToTopHandle}
      >
        <AiOutlineArrowUp className={classes.arrow} />
      </div>
    </React.Fragment>
  );
}

export default ButtonScrollTop;
