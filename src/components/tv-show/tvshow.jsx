import { Container,Row,Col } from 'react-bootstrap';
import './tvshow.css'

export const Tvshow = () => {
    return (
        <div className="wrap_fluid tvshow">
            <Container>
                <Row>
                    <Col>
                        <div className="wrap">
                            <h1>
                                tvShow
                            </h1>
                            <img src="https://via.placeholder.com/150" alt=''></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};