// route trending page

import { Trendinglist } from "../../components/showcase-list-card/list/trending-list/trending-list";

export const Trendingpage = () => {
  // change title
  document.title = "Trending";
  return (
    <Trendinglist />
  );
};
