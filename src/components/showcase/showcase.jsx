import React from "react";
import { Trendingshowcase } from "./trending-showcase/trending-showcase";
import { Tvshowcase } from "./tv-showcase/tvshowcase";

function Showcase() {
    return ( 
        <React.Fragment>
            <Trendingshowcase/>
            <Tvshowcase/>
        </React.Fragment>
     );
}

export default Showcase;