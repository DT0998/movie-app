import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route } from "react-router-dom";
import { Homepage } from './components/homepage/homepage';
import { Moviepage } from './components/moviepage/moviepage';
import { Tvshowpage } from './components/tvshowpage/tvshowpage';


function App() {
  return (
    <div>
      <Route path="/" exact component={Homepage} />
      <Route path="/movie" component={Moviepage} />
      <Route path="/tvshow" component={Tvshowpage} />
    </div>
  );
}

export default App;
