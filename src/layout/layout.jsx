import React, { useState } from "react";
import { Nav } from "./nav/nav";
import { Footer } from "./footer/footer";
import { TrailerMovie } from "../components/trailer/watchtrailer-movie/watchtrailer-movie";
import { TrailerTV } from "../components/trailer/watchtrailer-tv/watchtrailer-tv";


function Layout({children}) {
    // active trailer
    const [activeTrailer, setActiveTrailer] = useState(true)
    const OpenModalTrailerHandler = () =>{
        setActiveTrailer(!activeTrailer)
    }
    console.log(activeTrailer);

    return ( 
        <React.Fragment>
            <Nav ActiveTrailer={activeTrailer} />
            <TrailerTV onOpen={OpenModalTrailerHandler}/>
            <TrailerMovie/>
            <main>{children}</main>
            <Footer/>
        </React.Fragment>
     );
}

export default Layout;