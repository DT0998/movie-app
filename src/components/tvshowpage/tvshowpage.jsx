
// route tvshowpage
import { Nav } from '../nav/nav';
import {Tvshowlist} from './tvshow-list/tvshowlist';
import { Footer } from '../footer/footer';


export const Tvshowpage = () => {
  return (
    <div>
     <Nav/>
      <Tvshowlist/>
      <Footer />
    </div>
  );
};
