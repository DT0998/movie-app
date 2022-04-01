import React from "react";
import { CastMovie } from "./cast-movie/cast-movie";
import { CastTv } from "./cast-tv/cast-tv";

function CastSlide() {
    return (  
        <React.Fragment>
        <CastMovie/>
        <CastTv/>
        </React.Fragment>
    );
}

export default CastSlide;