// route tvshowpage
import { useEffect } from "react";
import { Tvshowlist } from "../../components/showcase-list/list/tvshow";

const TvShowPage = () => {
  // change title
  useEffect(() => {
    document.title = "TV Shows";
  }, []);
  return <Tvshowlist />;
};
export default TvShowPage;