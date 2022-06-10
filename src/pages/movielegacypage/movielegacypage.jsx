// route movielegacypage
import { Movielegacylist } from "../../components/showcase-list-card/list/movielegacy-list/movielegacy-list";

export const Movielegacypage = () => {
  useEffect(() => {
    document.title = "Movie Legacy";
  }, [])
  
  return (
    <Movielegacylist />
  );
};
