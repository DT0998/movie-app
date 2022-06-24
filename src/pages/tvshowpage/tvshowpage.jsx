// route tvshowpage
import { useEffect } from "react";
import { Tvshowlist } from "../../components/showcase-list/list/tv-list/tvshow-list";

export const Tvshowpage = () => {
  // change title
  useEffect(() => {
    document.title = "TV Shows";
  }, [])
  return (
    <Tvshowlist />
  );
};
