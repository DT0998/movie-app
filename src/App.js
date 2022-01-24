import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import { Homepage } from "./components/homepage/homepage";
import { Moviepage } from "./components/moviepage/moviepage";
import { Trendingpage } from "./components/trendingpage/trending";
import { Tvshowpage } from "./components/tvshowpage/tvshowpage";
import {Movielegacypage} from './components/movielegacypage/movielegacypage'

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
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
