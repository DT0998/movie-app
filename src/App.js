import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Homepage } from './components/homepage/homepage';
import { Moviepage } from './components/moviepage/moviepage';
import { Tvshowpage } from './components/tvshowpage/tvshowpage';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      {/* <Homepage />
      <Tvshowpage />
      <Moviepage /> */}
      {/* <Routes> */}
      <Route path="/" exact component={Homepage} />
      <Route path="/movie" component={Tvshowpage} />
      <Route path="/tvshow" component={Moviepage} />
      {/* </Routes> */}
    </div>
  );
}

export default App;
