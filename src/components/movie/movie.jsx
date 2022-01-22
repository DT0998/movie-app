import { Container, Col, Row } from 'react-bootstrap';
import './movie.css'

export const Movie = () => {
    return (
        <div className="wrap_fluid movie">
            <Container>
                <Row>
                    <Col>
                        <div className="wrap">
                            <h1>
                                Movie
                            </h1>
                            <img src="https://via.placeholder.com/150" alt=''></img>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};