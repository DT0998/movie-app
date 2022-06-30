import { Route, Switch } from "react-router-dom";
import NotFound from "../components/404/404";
import { Detailspagemovie } from "../pages/detailspage/detailspagemovie";
import { Detailspagetvshow } from "../pages/detailspage/detailspagetvshow";
import { Homepage } from "../pages/homepage/homepage";
import { Loginpage } from "../pages/loginpage/login";
import { Movielegacypage } from "../pages/movielegacypage/movielegacypage";
import { Moviepage } from "../pages/moviepage/moviepage";
import Search from "../pages/search/search";
import { Trendingpage } from "../pages/trendingpage/trending";
import { Tvshowpage } from "../pages/tvshowpage/tvshowpage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/trending" component={Trendingpage} />
      <Route path="/movielegacy" component={Movielegacypage} />
      <Route path="/account" component={Loginpage} />
      <Route path="/search" component={Search} />
      <Route exact path="/movie" component={Moviepage} />
      <Route path={`/movie/:id`} component={Detailspagemovie} />
      <Route exact path="/tvshow" component={Tvshowpage} />
      <Route path={`/tvshow/:id`} component={Detailspagetvshow} />
      <Route path="*" component={NotFound}/>
    </Switch>
  );
}

export default Routes;
