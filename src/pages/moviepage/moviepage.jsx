import { useEffect } from "react";
import { Movielist } from "../../components/showcase-list/list/movie-list/movie-list";

// route moviepage
export const Moviepage = () => {
  // change title
  useEffect(()=>{
    document.title = "Movies";
  },[])
  return <Movielist />;
};
