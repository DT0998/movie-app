import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch,Route } from "react-router-dom";
import { Homepage } from './components/homepage/homepage';
import { Moviepage } from './components/moviepage/moviepage';
import { Tvshowpage } from './components/tvshowpage/tvshowpage';


function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/movie" component={Moviepage} />
      <Route exact path="/tvshow" component={Tvshowpage} />
      </Switch>
    </div>
  );
}

export default App;
