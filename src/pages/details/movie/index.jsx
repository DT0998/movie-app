import React from "react";
import { useParams } from "react-router-dom";
import { Detailsmovie } from "../../../components/details/movie";

const DetailsMoviePage = () => {
  const { id } = useParams();

  return <Detailsmovie id={id} />;
};
export default DetailsMoviePage;
