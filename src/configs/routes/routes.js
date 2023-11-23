import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/home";
import MovieList from "../../pages/movie-list";
import DetailsMovie from "../../pages/details/movie";
import DetailsTvshow from "../../pages/details/tvshow";
import Search from "../../pages/search";
import Login from "../../pages/login";
import NotFound from "../../pages/404";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/trending"
        render={() => (
          <MovieList type="/trending/movie/week?" title="Movies Trending" />
        )}
      />
      <Route
        path="/movie-legacy"
        render={() => (
          <MovieList type="/movie/top_rated?" title="Movies Legacy" />
        )}
      />
      <Route
        exact
        path="/movie"
        render={() => (
          <MovieList type="/movie/popular?" title="Movies Popular" />
        )}
      />
      <Route path={`/movie/:id`} component={DetailsMovie} />
      <Route
        exact
        path="/tvshow"
        render={() => <MovieList type="/tv/popular?" title="TV Show" />}
      />
      <Route path={`/tvshow/:id`} component={DetailsTvshow} />
      <Route path="/login" component={Login} />
      <Route path="/search" component={Search} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
