
// route moviepage
import { Nav } from '../../components/nav/nav';
import { Movielist } from '../../components/movie-list/movielist';
import { Footer } from '../../components/footer/footer';


export const Moviepage = () => {
  return (
    <div>
     <Nav/>
    <Movielist/>
      <Footer />
    </div>
  );
};
