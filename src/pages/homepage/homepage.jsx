// route homepage
import { Header } from "../../components/header/header";
import Showcase from "../../components/showcase-list-card/showcase";
import React, { useEffect } from "react";
import { Community } from "../../components/cast-community-recommend/community-slide/community-slide";


export const Homepage = () => {
  // change title
  useEffect(() => {
    document.title = "Home";
  }, [])
  

  return (
    <React.Fragment>
      <Header />
      <Showcase />
      <Community />
    </React.Fragment>
  );
};
