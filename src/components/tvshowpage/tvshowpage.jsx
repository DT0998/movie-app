import { Nav } from '../nav/nav';
import {Tvshowdetail} from './tvshow-detail/tvshowdetail'
import { Footer } from '../footer/footer';


export const Tvshowpage = () => {
  return (
    <div>
     <Nav/>
      <Tvshowdetail/>
      <Footer />
    </div>
  );
};
