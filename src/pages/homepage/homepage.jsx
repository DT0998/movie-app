// route homepage
import { Header } from '../../components/header/header';
import { Feature } from '../../components/featureToday/feature';
import { Movielegacy } from '../../components/movielegacy/movielegacy';
import { Tvshow } from '../../components/tv-show/tvshow';
import { Community } from '../../components/community/community';


export const Homepage = () => {
  return (
    <div>
      <Header />
      <Feature />
      <Movielegacy />
      <Tvshow />
      <Community />
    </div>
  );
};
