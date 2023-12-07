import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/home";
import SearchPage from "../../pages/search";
import LoginPage from "../../pages/login";
import NotFoundPage from "../../pages/404";
import DetailsMoviePage from "../../pages/details";
import TvShowListPage from "../../pages/tvshow-list";
import MovieListPage from "../../pages/movie-list";
import MovieLegacyListPage from "../../pages/movie-legacy-list";
import MovieTrendingListPage from "../../pages/movie-trending-list";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/trending" component={MovieTrendingListPage} />
      <Route path="/movie-legacy" component={MovieLegacyListPage} />
      <Route exact path="/movie" component={MovieListPage} />
      <Route
        path={`/movie/:id`}
        render={() => <DetailsMoviePage type="movie" titleDetail="Movie" />}
      />
      <Route exact path="/tvshow" component={TvShowListPage} />
      <Route
        path={`/tvshow/:id`}
        render={() => <DetailsMoviePage type="tv" titleDetail="TV Show" />}
      />
      <Route path="/login" component={LoginPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default Routes;
