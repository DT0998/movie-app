import { Col, Container, Row } from "react-bootstrap";
import { Cast } from "../cast/cast";
import { Similar } from "../similar/similar";
import "./details.css";

export const Details = () => {
  return (
    <div>
      <Container>
        <Row>
            <div className="details_bg">
                <div className="d-flex justify-content-center align-items-center flex-md-row flex-column">
                    <Col>
                        <img src="" alt=""></img>
                        b
                    </Col>
                    <Col>
                        <p>title</p>
                        <p>content</p>
                        <p>release</p>
                    </Col>
                </div>
            </div>
          <Cast />
          <Similar />
        </Row>
      </Container>
    </div>
  );
};
