import { Nav } from '../../components/nav/nav';
import { Footer } from '../../components/footer/footer';
import { Details } from '../../components/details/details';
import { useParams } from 'react-router-dom';


export const Detailspage = () => {
  const { id } = useParams();
  return (
    <div>
      <Nav />
      <Details id={id} />
      <Footer />
    </div>
  );
};
