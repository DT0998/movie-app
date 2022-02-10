import { useParams } from 'react-router-dom';
import { Detailstvshow } from '../../components/details-tvshow/details-tvshow';


export const Detailspagetvshow = () => {
  const { id } = useParams();

  return (
    <div>
      <Detailstvshow id={id} />
    </div>
  );
};
