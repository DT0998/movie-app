import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from './components/header/header'
import { Feature } from './components/featureToday/feature';
import { Movie } from './components/movie/movie';
import { Footer } from './components/footer/footer';
import { Tvshow } from './components/tv-show/tvshow';


function App() {
  return (
    <div>
      <Header/>
      <Feature />
      <Movie />
      <Tvshow />
      <Footer />
    </div>
  );
}

export default App;
