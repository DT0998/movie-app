import React, { useEffect } from "react";
import { Community } from "../../components/cast-community-recommend/community-slide/community-slide";
import Showcase from "../../components/showcase-list/showcase";
import { lazy } from "../../utils/lazy";
const Header = lazy(()=>import('../../components/header/header'))

export const Homepage = () => {
  // change title
  useEffect(() => {
    document.title = "Home";
  }, [])
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading....</div>}>
      <Header />
      </React.Suspense>
      <Showcase />
      <Community />
    </React.Fragment>
  );
};
