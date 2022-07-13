import React from "react";
import { useParams } from "react-router-dom";
import { Detailstvshow } from "../../../components/details/tvshow";

const DetailsTvShowPage = () => {
  const { id } = useParams();

  return <Detailstvshow id={id} />;
};
export default DetailsTvShowPage;
