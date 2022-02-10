// route trending page
import { Featurelist } from '../../components/featureToday-list/featurelist';

export const Trendingpage = () => {
  // change title
  document.title = "Trending";
  return (
    <Featurelist />
  );
};
