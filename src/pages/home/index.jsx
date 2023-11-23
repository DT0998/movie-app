import React, { useEffect } from "react";
import Showcase from "../../components/showcase-list/showcase";
import { Banner } from "../../components/Banner";
import { useSelector } from "react-redux";
import { selectorCommunity, selectorMovie } from "../../redux/pages/home/slice";
import SliderCard from "../../components/SliderCard";
import classes from "./style.module.css";
import useMediaQuery from "../../hooks/useMediaquery";

const HomePage = () => {
  const community = useSelector(selectorCommunity);
  const movie = useSelector(selectorMovie);
  const IMG_ORG = "https://image.tmdb.org/t/p/w500/";
  // media query
  const isMobile = useMediaQuery("(min-width:320px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");

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
