// route trending page
import { Nav } from '../../components/nav/nav';
import { Featurelist } from '../../components/featureToday-list/featurelist';
import { Footer } from '../../components/footer/footer';


export const Trendingpage = () => {
  return (
    <div>
      <Nav />
      <Featurelist />
      <Footer />
    </div>
  );
};
