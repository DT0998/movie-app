import React, { useEffect } from "react";
import { Header } from "../../components/header/header";
import { Community } from "../../components/cast-community-recommend/community-slide/community-slide";
import Showcase from "../../components/showcase-list/showcase";


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
