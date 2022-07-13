// route movielegacypage
import { useEffect } from "react";
import { Movielegacylist } from "../../components/showcase-list/list/movielegacy";

const MovieLegacyPage = () => {
  useEffect(() => {
    document.title = "Movie Legacy";
  }, []);

  return <Movielegacylist />;
};
export default MovieLegacyPage;
