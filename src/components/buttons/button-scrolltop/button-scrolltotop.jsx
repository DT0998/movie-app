import React, { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import './button-scrolltotop.css'
function ButtonScrollTop() {
  const [isHide, setIsHide] = useState(false)
  // click to top 
  const clickToTopHandle = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  // scroll btn to top
  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 2000){
      setIsHide(true)
    }else{
      setIsHide(false)
    }
    
  }
  
  useEffect(() => {
    clickToTopHandle()
    //  hide btn scroll to top
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <React.Fragment>
      <div className={`Button_ScrollToTop ${isHide ? "Active_ScrollToTop" : "inActive_ScrollToTop"}`} onClick={clickToTopHandle}>
        <BsArrowUpCircle className="Button_ScrollToTop_icon"/>
      </div>
    </React.Fragment>
  );
}

export default ButtonScrollTop;