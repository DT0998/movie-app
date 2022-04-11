import "./loading.css";
import { Container, Row, Col } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

export const Loading = (props) => {
  return (
    <Container>
        <Row>
          <Col>
            {props.type === "fullscreen" ? (
             <div className="wrap_fluid loading">
              <div className="wrap d-flex justify-content-center align-items-center">
                <div class="loader"></div>
              </div>
              </div>
            ) : props.type === "button" ? (
              <div className="wrap d-flex justify-content-center align-items-center">
                <div class="loader"></div>
              </div>
            ) : props.type === "skeleton" ? <div className="wrap d-flex justify-content-center align-items-center">
              <Skeleton duration={2}/>
            </div> : null}
          </Col>
        </Row>
      </Container>
  );
};
