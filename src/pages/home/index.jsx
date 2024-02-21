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
  const movieData = useSelector(selectorMovie);
  const movieLegacyData = useSelector(selectorMovieLegacy);
  const tvshowData = useSelector(selectorTvshow);
  const communityData = useSelector(selectorCommunity);
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
        titleMain="Movies Trending"
        imgUrl={IMG_ORG}
      />
      <ShowCase
        data={movieLegacyData}
        type="movie"
        to="/movie-legacy"
        titleMain="Movies Legacy"
        imgUrl={IMG_ORG}
      />
      <ShowCase
        data={tvshowData}
        type="tvshow"
        to="/tvshow"
        titleMain="TV Shows"
        imgUrl={IMG_ORG}
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
