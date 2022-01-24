
// route homepage
import { Nav } from '../nav/nav';
import {Header} from './header/header';
import { Feature } from '../homepage/featureToday/feature';
import { Movie } from '../homepage/movie/movie';
import { Tvshow } from '../homepage/tv-show/tvshow';
import {Community} from '../homepage/community/community';
import { Footer } from '../footer/footer';


export const Homepage = () => {
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
};
