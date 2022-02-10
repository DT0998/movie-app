// route moviepage
import { Movielist } from "../../components/movie-list/movielist";
export const Moviepage = () => {
  // change title
  document.title = "Movie";
  return <Movielist />;
};
