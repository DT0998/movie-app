import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navmobile.css";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/nav/logo/logo.svg";

function NavMobile({open}) {
  // state scroll nav mobile
  const [isScroll,setIsScroll] = useState(false)
  
  useEffect(() => {
    // scroll nav mobile
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);
  // scroll nav mobile
  const handlescroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setIsScroll(true)
    }else{
      setIsScroll(false)
    }
  };

  return (
    <React.Fragment>
      <div className={`dropdown ${open ? "Active" : "inActive"}`} open={open}>
        <ul className={`dropdown-content ${open ? "Active_content" : "inActive_content"}`} open={open}>
          <Link to="/movie">
            <li className="dropdown_title">Movies</li>
          </Link>
          <Link to="/tvshow" >
            <li className="dropdown_title">TV Shows</li>
          </Link>
          <Link to="/search">
            <li className="dropdown_title d-flex justify-content-between align-items-center">
              <div>Search</div>
              <FaSearch />
            </li>
          </Link>
          <Link to="/account">
            <li className="dropdown_title">My Account</li>
          </Link>
          <div className={isScroll ? "Active_div" : "inActive_div"}/>
          <Link to="/">
            <div className={` d-flex align-items-center ${isScroll ? "logo_scroll" : "logo_noscroll" }`}>
            <img src={logo} className="logo" alt="logo"/>
            </div>
          </Link>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default NavMobile;
