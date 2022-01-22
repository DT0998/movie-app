import "./feature.css";
import { Container, Row, Col } from 'react-bootstrap';

export const Feature = () => {
    return (
        <div
            className="wrap_fluid feature"
        >
        <Container >
                <Row>
                    <Col>
                        <div className="wrap">
                            <h1> Trending </h1>
                            <div className=" d-flex flex-row gap-3">
                                <img src="https://via.placeholder.com/150" alt="" className="img_feature"/>
                                <img src="https://via.placeholder.com/150" alt="" className="img_feature"/>
                                <img src="https://via.placeholder.com/150" alt="" className="img_feature"/>
                                <img src="https://via.placeholder.com/150" alt="" className="img_feature"/>
                                <img src="https://via.placeholder.com/150" alt="" className="img_feature"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
