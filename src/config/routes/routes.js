import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/home";
import Trending from "../../pages/trending";
import MovieLegacy from "../../pages/movie-legacy";
import Movie from "../../pages/movie";
import TvShow from "../../pages/tvshow";
import DetailsMovie from "../../pages/details/movie";
import DetailsTvshow from "../../pages/details/tvshow";
import Search from "../../pages/search";
import Login from "../../pages/login";
import NotFound from "../../pages/404";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/trending" component={Trending} />
      <Route path="/movielegacy" component={MovieLegacy} />
      <Route exact path="/movie" component={Movie} />
      <Route path={`/movie/:id`} component={DetailsMovie} />
      <Route exact path="/tvshow" component={TvShow} />
      <Route path={`/tvshow/:id`} component={DetailsTvshow} />
      <Route path="/account" component={Login} />
      <Route path="/search" component={Search} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
