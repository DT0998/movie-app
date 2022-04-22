import { Movielist } from "../../components/showcase-list-card/list/movie-list/movie-list";

// route moviepage
export const Moviepage = () => {
  // change title
  document.title = "Movies";
  return <Movielist />;
};
