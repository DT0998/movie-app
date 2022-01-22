import { Container,Row,Col } from 'react-bootstrap';
import './community.css'

export const Community = () => {
    return (
        <div className="wrap_fluid">
            <Container>
                <Row>
                    <Col>
                        <div className="wrap">
                            <h1>
                                Community
                            </h1>
                            <img src="https://via.placeholder.com/150" alt=''></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};