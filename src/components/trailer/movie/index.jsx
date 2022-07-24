/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import "../trailer.css";
import { Modal } from "react-bootstrap";
import ButtonWatchNow  from "../../buttons/button-square";

const TrailerMovie = ({ id }, props) => {
  const [lgShow, setLgShow] = useState(false);
  const [Trailers, setTrailers] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/movie/${id}/videos?` + API_KEY;

  // fetch movie trailer api
  const getTrailer = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setTrailers(data.results);
  };
  useEffect(() => {
    getTrailer();
  }, [API_URL]);

  // open modal
  const openModalHandle = () => {
    setLgShow(true);
  };
  const closeModalHandle = () => {
    setLgShow(false);
  };

  return (
    <React.Fragment>
      {Trailers.length === 0 ? null : (
        <React.Fragment>
          <ButtonWatchNow
            type="moreInfo"
            onClick={openModalHandle}
          >
            Watch Now
          </ButtonWatchNow>
          <Modal
            size="lg"
            show={lgShow}
            onHide={closeModalHandle}
            aria-labelledby="modal-trailer"
            className="d-flex align-items-center justify-content-center"
          >
            <Modal.Header closeButton>
              <Modal.Title id="modal-trailer">Play Trailer</Modal.Title>
            </Modal.Header>
            {Trailers.map(
              (trailer, index) =>
                index === 1 && (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title={trailer.name}
                    key={trailer.id}
                    frameBorder="0"
                    allowFullScreen
                  />
                )
            )}
          </Modal>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default TrailerMovie;