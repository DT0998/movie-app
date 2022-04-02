import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import "./watchtrailermovie.css";
import Aos from "aos";
import { Modal } from "react-bootstrap";
import { Buttonsquare } from "../buttons/button-square/button-square";

export const TrailerMovie = ({ id }) => {
  const [lgShow, setLgShow] = useState(false);
  const [Trailers, setTrailers] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/movie/${id}/videos?` + API_KEY;

  // fetch movie api
  const getTrailer = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setTrailers(data.results);
  };
  useEffect(() => {
    getTrailer();
    // use aos
    Aos.init();
  }, [API_URL]);

  return (
    <React.Fragment>
      {!Trailers.length === 0 ? null : (
        <React.Fragment>
          <Buttonsquare
            onClick={() => setLgShow(true)}
            className="btn_info_watch"
            title="Watch now"
          />
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            className="d-flex align-items-center justify-content-center"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Play Trailer
              </Modal.Title>
            </Modal.Header>
            {Trailers.map(
              (trailer, index) =>
                index === 6 && (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title={trailer.name}
                    key={trailer.id}
                    frameBorder="0"
                    allowFullscreen
                  />
                )
            )}
          </Modal>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
