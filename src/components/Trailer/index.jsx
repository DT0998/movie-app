import { useState } from "react";
import React from "react";
import classes from "./style.module.css";
import "./style.css";
import { Modal } from "react-bootstrap";

const Trailer = (props) => {
  const { data } = props;
  const [isShow, setIsShow] = useState(false);
  // open modal
  const toggleModalHandle = () => {
    setIsShow(!isShow);
  };
  return (
    <React.Fragment>
      {data.length === 0 ? null : (
        <React.Fragment>
          <button
            className={`${classes.btn_infowatch}`}
            onClick={toggleModalHandle}
          >
            Watch Now
          </button>
          <Modal
            size="lg"
            show={isShow}
            onHide={toggleModalHandle}
            aria-labelledby="modal-trailer"
            className={`d-flex align-items-center justify-content-center`}
          >
            <Modal.Header closeButton>
              <Modal.Title id="modal-trailer">Play Trailer</Modal.Title>
            </Modal.Header>
            {data.map(
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
export default Trailer;
