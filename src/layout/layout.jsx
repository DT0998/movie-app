import React from "react";
import { Footer } from "./footer/footer";
import {Nav} from './nav/nav'


function Layout({children}) {
    return ( 
        <React.Fragment>
            <Nav/>
            <main>{children}</main>
            <Footer/>
        </React.Fragment>
     );
}

export default Layout;