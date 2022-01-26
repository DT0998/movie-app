
// route movielegacypage
import { Nav } from '../../components/nav/nav';
import { Movielegacylist } from '../../components/movielegacy-list/movielegacylist';
import { Footer } from '../../components/footer/footer';


export const Movielegacypage = () => {
  return (
    <div>
     <Nav/>
     <Movielegacylist/>
      <Footer />
    </div>
  );
};
