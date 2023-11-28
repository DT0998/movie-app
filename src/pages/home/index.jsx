import React, { useEffect } from "react";
import { Banner } from "../../components/Banner";
import { useSelector } from "react-redux";
import {
  selectorCommunity,
  selectorMovie,
  selectorMovieLegacy,
  selectorTvshow,
} from "../../redux/pages/home/slice";
import SliderCard from "../../components/SliderCard";
import classes from "./style.module.css";
import ShowCase from "../../components/ShowCase";

const HomePage = () => {
  const communityData = useSelector(selectorCommunity);
  const movieData = useSelector(selectorMovie);
  const movieLegacyData = useSelector(selectorMovieLegacy);
  const tvshowData = useSelector(selectorTvshow);
  const IMG_ORG = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    // change title
    document.title = "Home";
  });

  return (
    <div className="d-flex flex-column">
      <Banner />
      <ShowCase
        data={movieData}
        type="movie"
        to="/trending"
        title_main="Movies Trending"
      />
      <ShowCase
        data={movieLegacyData}
        type="movie"
        to="/movie-legacy"
        title_main="Movies Legacy"
      />
      <ShowCase
        data={tvshowData}
        type="tvshow"
        to="/tvshow"
        title_main="TV Shows"
      />
      {/* cast */}
      <SliderCard
        data={communityData}
        type="community"
        IMG_ORG={IMG_ORG}
        extraClass={classes.community_container}
        title="Community"
      />
    </div>
  );
};
export default HomePage;
