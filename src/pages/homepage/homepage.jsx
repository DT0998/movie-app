import React, { useEffect } from "react";
import { Header } from "../../components/header/header";
import { Community } from "../../components/cast-community-recommend/community-slide/community-slide";
import Showcase from "../../components/showcase-list/showcase";
import { Loading } from "../../components/loading/loading";
import {useDispatch} from 'react-redux'
import { getAllMovieAndTvShowData } from "../../store/homepage-actions";


export const Homepage = () => {
  // change title
  useEffect(() => {
    document.title = "Home";
  }, [])
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getAllMovieAndTvShowData())
  },[dispatch])

  return (
    <React.Fragment>
      <Loading type="fullscreen"/>
      <Header />
      <Showcase />
      <Community />
    </React.Fragment>
  );
};
