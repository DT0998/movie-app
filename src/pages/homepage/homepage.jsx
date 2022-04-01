// route homepage
import { Header } from '../../components/header/header';
import { Community } from '../../components/community/community';
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
