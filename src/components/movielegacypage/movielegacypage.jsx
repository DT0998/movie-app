
// route homepage
import { Nav } from '../nav/nav';
import { Movielegacy } from './movielegacy/movielegacy';
import { Footer } from '../footer/footer';


export const Movielegacypage = () => {
  return (
    <div>
     <Nav/>
     <Movielegacy/>
      <Footer />
    </div>
  );
};
