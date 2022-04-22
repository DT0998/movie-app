// route tvshowpage
import { Tvshowlist } from "../../components/showcase-list-card/list/tv-list/tvshow-list";

export const Tvshowpage = () => {
   // change title
   document.title = "TV Shows";
  return (
    <Tvshowlist />
  );
};
