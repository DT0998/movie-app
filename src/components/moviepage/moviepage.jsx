
// route moviepage
import { Nav } from '../nav/nav';
import { Movielist } from './movie-list/movielist';
import { Footer } from '../footer/footer';


export const Moviepage = () => {
  return (
    <div>
     <Nav/>
    <Movielist/>
      <Footer />
    </div>
  );
};
