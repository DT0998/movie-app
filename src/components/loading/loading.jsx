import "@fortawesome/fontawesome-svg-core/styles.css";
import "./loading.css";
import { Container, Row, Col } from "react-bootstrap";

export const Loading = () => {
    return (
        <div className="wrap_fluid loading">
            <Container>
                <Row>
                    <Col>
                        <div className="wrap d-flex justify-content-center align-items-center">
                        <div class="loader"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
