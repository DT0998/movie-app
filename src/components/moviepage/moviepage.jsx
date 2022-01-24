
// route homepage
import { Nav } from '../nav/nav';
import { Featuredetail } from './featureToday-detail/featuredetail';
import { Footer } from '../footer/footer';


export const Moviepage = () => {
  return (
    <div>
     <Nav/>
      <Featuredetail/>
      <Footer />
    </div>
  );
};
