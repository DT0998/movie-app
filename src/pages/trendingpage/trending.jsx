// route trending page
import { useEffect } from "react";
import { Trendinglist } from "../../components/showcase-list/list/trending-list/trending-list";

export const Trendingpage = () => {
  // change title
  useEffect(()=>{
    document.title = "Trending";
  },[])
  return (
    <Trendinglist />
  );
};
