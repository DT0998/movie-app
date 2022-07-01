import React, { useEffect } from "react";
import { lazy } from "../../utils/lazy";
import { Community } from "../../components/cast-community-recommend/community-slide/community-slide";
import Showcase from "../../components/showcase-list/showcase";
import { Loading } from "../../components/loading/loading";

const Header = lazy(()=>import('../../components/header/header'))

export const Homepage = () => {
  // change title
  useEffect(() => {
    document.title = "Home";
  }, [])
  return (
    <React.Fragment>
      <React.Suspense fallback={<Loading type="loading_slide"/>}>
       <Header />
      </React.Suspense>
      <Showcase />
      <Community />
    </React.Fragment>
  );
};
