
// route tvshowpage
import { Tvshowlist } from '../../components/tvshow-list/tvshowlist';



export const Tvshowpage = () => {
   // change title
   document.title = "TV Show";
  return (
    <Tvshowlist />
  );
};
