import { useEffect } from "react";
import { Movielist } from "../../components/showcase-list/list/movie";

// route moviepage
const MoviePage = () => {
  // change title
  useEffect(() => {
    document.title = "Movies";
  }, []);
  return <Movielist />;
};
export default MoviePage;