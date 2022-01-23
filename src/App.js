import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from './components/header/header'
import { Nav } from './components/nav/nav';
import { Feature } from './components/featureToday/feature';
import { Movie } from './components/movie/movie';
import { Tvshow } from './components/tv-show/tvshow';
import {Community} from './components/community/community'
import { Footer } from './components/footer/footer';


function App() {
  return (
    <div>
      <Nav/>
      <Header/>
      <Feature />
      <Movie />
      <Tvshow />
      <Community/>
      <Footer />
    </div>
  );
}

export default App;
