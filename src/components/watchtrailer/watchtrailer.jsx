import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./watchtrailer.css";
import Aos from "aos";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { Col, Container, Row } from "react-bootstrap";

export const Trailer = ({ id, props }) => {
  const [lgShow, setLgShow] = useState(false);
  const [trailer, setTrailer] = useState({});
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + `/${id}/videos?` + API_KEY;

  // fetch movie api
  const getTrailer = async function () {
    let response = await axios.get(API_URL);
    console.log(response.data);
    setTrailer(response.data);
  };
  useEffect(() => {
    getTrailer();
    // use aos
    Aos.init();
  }, [API_URL]);

  // change title
  //   document.title = tvshow?.name;

  return (
    <div>
      <div className="wrap_fluid">
        <Container>
          <Row className="d-flex justify-content-center align-items-center flex-md-row flex-column">
            <Col className="d-flex justify-content-center align-items-center">
              <Modal size="lg" show={lgShow}
                onHide={() => setLgShow(false)} >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Large Modal
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>video</Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
