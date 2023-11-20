import React, { useEffect } from "react";
import { Community } from "../../components/cast-community-recommend/community";
import Showcase from "../../components/showcase-list/showcase";
import { Banner } from "../../components/Banner";

const HomePage = () => {
  useEffect(() => {
    // change title
    document.title = "Home";
  });

  return (
    <div className="d-flex flex-column">
      <Banner />
      <Showcase />
      <Community />
    </div>
  );
};
export default HomePage;
