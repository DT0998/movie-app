import React from "react";
import { Movielegacyshowcase } from "./showcase/movielegacy";
import { Trendingshowcase } from "./showcase/movietrending";

import { Tvshowcase } from "./showcase/tvshow";


function Showcase() {
    return ( 
        <React.Fragment>
            <Trendingshowcase />
            <Movielegacyshowcase/>
            <Tvshowcase/>
        </React.Fragment>
     );
}

export default Showcase;