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
import Search from "./pages/search/search";
import { Loading } from "./components/loading/loading";
import Layout from "./layout/layout";


function App() {
 
  return (
    <BrowserRouter basename="/movie-app">
        {/* <Loading type="fullscreen"/> */}
        <Layout>
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
        </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
