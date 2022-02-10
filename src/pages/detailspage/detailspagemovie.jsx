import { useParams } from 'react-router-dom';
import { Detailsmovie } from '../../components/details-movie/details-movie';


export const Detailspagemovie = () => {
  const { id } = useParams();

  return (
    <div>
      <Detailsmovie id={id} />
    </div>
  );
};
