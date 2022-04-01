import React from "react";
import './showcasebody.css';
import { Movielegacyshowcase } from "./movielegacy-showcase/movielegacy-showcase";
import { Trendingshowcase } from "./trending-showcase/trending-showcase";
import { Tvshowcase } from "./tv-showcase/tv-showcase";

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