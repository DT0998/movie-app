import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./watchtrailer.css";
import Aos from "aos";
import { Modal} from "react-bootstrap";
import { Buttonwatchnow } from "../buttons/button-watchnow/button-watchnow";

export const Trailer = ({ id }, props) => {
  const [lgShow, setLgShow] = useState(false);
  const [trailer, setTrailer] = useState({});
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/${id}/videos?` + API_KEY;

  // fetch movie api
  const getTrailer = async function () {
    let response = await axios.get(API_URL);
    setTrailer(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getTrailer();
    // use aos
    Aos.init();
  }, [API_URL]);


  return (
    <>
    <Buttonwatchnow onOpenModal={()=>setLgShow(true)}/>
    <div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={()=> setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           Play Trailer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Video</Modal.Body>
      </Modal>
    </div>
    </>
  );
};
