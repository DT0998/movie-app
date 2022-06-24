// route movielegacypage
import { useEffect } from "react";
import { Movielegacylist } from "../../components/showcase-list/list/movielegacy-list/movielegacy-list";


export const Movielegacypage = () => {
  useEffect(() => {
    document.title = "Movie Legacy";
  }, [])
  
  return (
    <Movielegacylist />
  );
};
