import React, { useEffect } from "react";
import Showcase from "../../components/showcase-list/showcase";
import { Banner } from "../../components/Banner";
import { useSelector } from "react-redux";
import { selectorCommunity } from "../../redux/pages/home/slice";
import SliderCard from "../../components/SliderCard";
import classes from "./style.module.css";

const HomePage = () => {
  const community = useSelector(selectorCommunity);
  const IMG_ORG = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    // change title
    document.title = "Home";
  });

  return (
    <div className="d-flex flex-column">
      <Banner />
      <Showcase />
      {/* cast */}
      <SliderCard
        data={community}
        type="community"
        IMG_ORG={IMG_ORG}
        extraClass={classes.community_container}
        title="Community"
      />
    </div>
  );
};
export default HomePage;
