import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/homepage/homepage";
import { Moviepage } from "./pages/moviepage/moviepage";
import { Trendingpage } from "./pages/trendingpage/trending";
import { Tvshowpage } from "./pages/tvshowpage/tvshowpage";
import { Movielegacypage } from './pages/movielegacypage/movielegacypage'
import { Loginpage } from "./pages/loginpage/login";
import { Detailspagemovie } from "./pages/detailspage/detailspagemovie";
import { Detailspagetvshow } from "./pages/detailspage/detailspagetvshow";
import Layout from "./components/layout/layout";
import Search from "./pages/search/search";

function App() {
 

  return (
      <BrowserRouter basename="/movie-app">
        <Layout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/trending" component={Trendingpage} />
          <Route exact path="/movie" component={Moviepage} />
          <Route exact path="/tvshow" component={Tvshowpage} />
          <Route exact path="/movielegacy" component={Movielegacypage} />
          <Route exact path="/account" component={Loginpage} />
          <Route exact path="/search" component={Search} />
          <Route exact path={`/details/movie/:id`} component={Detailspagemovie} />
          <Route exact path={`/details/tv/:id`} component={Detailspagetvshow} />
        </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
