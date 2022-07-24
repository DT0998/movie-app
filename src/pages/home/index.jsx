import React, { useEffect, useCallback } from "react";
import { Community } from "../../components/cast-community-recommend/community";
import Showcase from "../../components/showcase-list/showcase";
import { Banner } from "../../components/banner";
import { useDispatch } from "react-redux";
import { getAllMovieAndTvShow } from "../../redux/pages/home/actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const fetchAllMovieAndTvShow = useCallback(async () => {
    try {
      await dispatch(getAllMovieAndTvShow()).unwrap();
    } catch (error) {}
  }, [dispatch]);

  useEffect(() => {
    // change title
    document.title = "Home";
    fetchAllMovieAndTvShow();
  }, [fetchAllMovieAndTvShow]);

  return (
    <React.Fragment>
      <Banner />
      <Showcase />
      <Community />
    </React.Fragment>
  );
};
export default HomePage;
