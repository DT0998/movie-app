
// route homepage
import { Nav } from '../../components/nav/nav';
import {Header} from '../../components/header/header';
import { Feature } from '../../components/featureToday/feature';
import { Movielegacy } from '../../components/movielegacy/movielegacy';
import { Tvshow } from '../../components/tv-show/tvshow';
import {Community} from '../../components/community/community';
import { Footer } from '../../components/footer/footer';


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
