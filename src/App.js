import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/homepage/homepage";
import { Moviepage } from "./pages/moviepage/moviepage";
import { Trendingpage } from "./pages/trendingpage/trending";
import { Tvshowpage } from "./pages/tvshowpage/tvshowpage";
import { Movielegacypage } from './pages/movielegacypage/movielegacypage'
import { Loginpage } from "./pages/loginpage/login";
import { Detailspage } from "./pages/detailspage/detailspage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/trending" component={Trendingpage} />
          <Route exact path="/movie" component={Moviepage} />
          <Route exact path="/tvshow" component={Tvshowpage} />
          <Route exact path="/movielegacy" component={Movielegacypage} />
          <Route exact path="/account" component={Loginpage} />
          <Route exact path="/details/:id" component={Detailspage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
