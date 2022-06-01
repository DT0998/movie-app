import React from "react";
import { Nav } from "./nav/nav";
import { Footer } from "./footer/footer";
import { TrailerMovie } from "../components/trailer/watchtrailer-movie/watchtrailer-movie";
import { TrailerTV } from "../components/trailer/watchtrailer-tv/watchtrailer-tv";


function Layout({children}) {
    return ( 
        <React.Fragment>
            <Nav />
            <TrailerTV/>
            <TrailerMovie/>
            <main>{children}</main>
            <Footer/>
        </React.Fragment>
     );
}

export default Layout;