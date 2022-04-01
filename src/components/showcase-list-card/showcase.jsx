import React from "react";
import { Movielegacyshowcase } from "./showcase/movielegacy-showcase/movielegacy-showcase";
import { Trendingshowcase } from "./showcase/trending-showcase/trending-showcase";
import { Tvshowcase } from "./showcase/tv-showcase/tv-showcase";
import './cardbody.css';


function Showcase() {
    return ( 
        <React.Fragment>
            <Trendingshowcase/>
            <Movielegacyshowcase/>
            <Tvshowcase/>
        </React.Fragment>
     );
}

export default Showcase;