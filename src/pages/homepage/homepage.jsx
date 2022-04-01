// route homepage
import { Community } from '../../components/cast-community-similar/community-slide/community-slide';
import { Header } from '../../components/header/header';
import Showcase from '../../components/showcase/showcase';
// import { Loading } from '../../components/loading/loading';


export const Homepage = () => {
    // change title
    document.title = "Home";
  return (
    <div>
      {/* <Loading/> */}
      <Header />
      <Showcase/>
      <Community />
    </div>
  );
};
