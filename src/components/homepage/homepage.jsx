
// route homepage
import { Nav } from '../nav/nav';
import {Header} from './header/header';
import { Feature } from '../homepage/featureToday/feature';
import { Movielegacy } from './movielegacy/movielegacy';
import { Tvshow } from '../homepage/tv-show/tvshow';
import {Community} from '../homepage/community/community';
import { Footer } from '../footer/footer';


export const Homepage = () => {
  return (
    <div>
     <Nav/>
      <Header/>
      <Feature />
      <Movielegacy />
      <Tvshow />
      <Community/>
      <Footer />
    </div>
  );
};
