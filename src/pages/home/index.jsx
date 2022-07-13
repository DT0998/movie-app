import React, { useEffect } from "react";
import { Community } from "../../components/cast-community-recommend/community";
import Showcase from "../../components/showcase-list/showcase";
import { Header } from "../../components/header";

const HomePage = () => {
  // change title
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Showcase />
      <Community />
    </React.Fragment>
  );
};
export default HomePage;
