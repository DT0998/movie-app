import React from 'react';
import { useParams } from 'react-router-dom';
import { Detailstvshow } from '../../components/details/details-tvshow/details-tvshow';


export const Detailspagetvshow = () => {
  const {id} = useParams();

  return (
    <React.Fragment>
      <Detailstvshow id={id} />
    </React.Fragment>
  );
};
