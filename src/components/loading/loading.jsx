import "./loading.css";
import { Container, Row, Col } from "react-bootstrap";

export const Loading = (props) => {
  return (
    <div className="wrap_fluid loading">
      <Container>
        <Row>
          <Col>
            {props.type === "fullscreen" ? (
              <div className="wrap d-flex justify-content-center align-items-center">
                <div class="loader"></div>
              </div>
            ) : props.type === "button" ? (
              <div className="wrap d-flex justify-content-center align-items-center">
                <div class="loader"></div>
              </div>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
