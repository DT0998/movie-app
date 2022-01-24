
// route homepage
import { Nav } from '../nav/nav';
import { Movielegacylist } from './movielegacy-list/movielegacylist';
import { Footer } from '../footer/footer';


export const Movielegacypage = () => {
  return (
    <div>
     <Nav/>
     <Movielegacylist/>
      <Footer />
    </div>
  );
};
