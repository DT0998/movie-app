import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./watchtrailermovie.css";
import Aos from "aos";
import { Modal } from "react-bootstrap";
import { Buttonsquare } from "../buttons/button-square/button-square";

export const TrailerMovie = ({ id }) => {
  const [lgShow, setLgShow] = useState(false);
  const [trailer, setTrailer] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/${id}/videos?` + API_KEY;

  // fetch movie api
  const getTrailer = async function () {
    let response = await axios.get(API_URL);
    setTrailer(response.data.result);
    console.log(response.data.result);
  };
  useEffect(() => {
    getTrailer();
    // use aos
    Aos.init();
  }, [API_URL]);


  return (
    <>
      <Buttonsquare onClick={() => setLgShow(true)} className="btn_info_watch" title="watch now" />
      <div>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Play Trailer
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {trailer.map((item) => (
              <iframe width="420" height="345" src={`https://www.youtube.com/embed/tgbNymZ7vqY?controls=0`} title={item.name} key={item.id}></iframe>
          ))}
          aaa
            </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
