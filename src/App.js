import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Homepage} from './components/homepage/homepage';
import { Moviepage } from './components/moviepage/moviepage';
import { Tvshowpage } from './components/tvshowpage/tvshowpage';


function App() {
  return (
    <div>
    <Homepage/>
    <Tvshowpage/>
    <Moviepage/>
    </div>
  );
}

export default App;
