import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Homepage } from './components/homepage/homepage';
import { Moviepage } from './components/moviepage/moviepage';
import { Tvshowpage } from './components/tvshowpage/tvshowpage';
import { Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Route path="/" exact component={Homepage} />
      <Route path="/movie" exact component={Moviepage} />
      <Route path="/tvshow" exact component={Tvshowpage} />
    </div>
  );
}

export default App;
