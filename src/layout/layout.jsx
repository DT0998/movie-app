import React from "react";
import { TrailerMovie } from "../components/trailer/watchtrailer-movie/watchtrailer-movie";
import { Footer } from "./footer/footer";
import { TrailerTV } from "../components/trailer/watchtrailer-tv/watchtrailer-tv";
import { Nav } from "./nav/nav";


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