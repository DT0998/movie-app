import React from 'react';
import { useParams } from 'react-router-dom';
import { Detailsmovie } from '../../components/details/details-movie/details-movie';


export const Detailspagemovie = () => {
  const {id} = useParams();

  return (
    <React.Fragment>
      <Detailsmovie id={id} />
    </React.Fragment>
  );
};
