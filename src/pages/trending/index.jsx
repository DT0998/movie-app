// route trending page
import { useEffect } from "react";
import { Trendinglist } from "../../components/showcase-list/list/trending";

const TrendingPage = () => {
  // change title
  useEffect(() => {
    document.title = "Trending";
  }, []);
  return <Trendinglist />;
};
export default TrendingPage;