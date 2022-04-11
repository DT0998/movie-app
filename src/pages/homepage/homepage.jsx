// route homepage
import { Community } from '../../components/cast-community-similar/community-slide/community-slide';
import { Header } from '../../components/header/header';
import Showcase from '../../components/showcase-list-card/showcase';
import React from 'react'


export const Homepage = () => {
    // change title
    document.title = "Home";
  return (
    <React.Fragment>
      <Header />
      <Showcase/>
      <Community />
    </React.Fragment>
  );
};
