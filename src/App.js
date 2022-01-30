import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/homepage/homepage";
import { Moviepage } from "./pages/moviepage/moviepage";
import { Trendingpage } from "./pages/trendingpage/trending";
import { Tvshowpage } from "./pages/tvshowpage/tvshowpage";
import { Movielegacypage } from './pages/movielegacypage/movielegacypage'
import { Loginpage } from "./pages/loginpage/login";
import { Footer } from "./components/footer/footer";
import { Nav } from "./components/nav/nav";
import { Detailspagemovie } from "./pages/detailspage/detailspagemovie";
import { Detailspagetvshow } from "./pages/detailspage/detailspagetvshow";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/trending" component={Trendingpage} />
          <Route exact path="/movie" component={Moviepage} />
          <Route exact path="/tvshow" component={Tvshowpage} />
          <Route exact path="/movielegacy" component={Movielegacypage} />
          <Route exact path="/account" component={Loginpage} />
          <Route exact path={`/details/movie/:id`} component={Detailspagemovie} />
          <Route exact path={`/details/tv/:id`} component={Detailspagetvshow} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
