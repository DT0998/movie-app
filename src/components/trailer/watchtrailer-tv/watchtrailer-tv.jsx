import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import "../trailer.css";
import { Modal } from "react-bootstrap";
import { Buttonsquare } from "../../buttons/button-square/button-square";

export const TrailerTV = ({ id }, props) => {
  const [lgShow, setLgShow] = useState(false);
  const [Trailers, setTrailers] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/tv/${id}/videos?` + API_KEY;

  // fetch tv trailer api
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
          <Buttonsquare
            type="moreInfo"
            onClick={openModalHandle}
            title="Watch now"
          />
          <Modal
            size="lg"
            show={lgShow}
            onHide={closeModalHandle}
            aria-labelledby="modal-trailer"
            className="d-flex align-items-center justify-content-center"
          >
            <Modal.Header closeButton>
              <Modal.Title id="modal-trailer">
                Play Trailer
              </Modal.Title>
            </Modal.Header>
            {Trailers.map(
              (trailer, index) =>
                index === 0 && (
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
