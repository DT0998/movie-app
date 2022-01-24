import { Container, Row, Col } from 'react-bootstrap';
import './community.css'

export const Community = () => {
    return (
        <div className="wrap_fluid community">
            <Container>
                <Row>
                    <Col>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h1>
                                Community
                            </h1>
                            <button className="btn_view view-more" data-aos="fade-left" data-aos-duration="1500">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">View More</span>
                            </button>
                        </div>
                        <div className="wrap bg_community">
                            <div className='d-flex flex-column justify-content-around'>
                                <div class="card_community card_detail">
                                    <div class="border">
                                        <h2>Ben Stiller</h2>
                                    </div>
                                </div>
                                <div class="card_community card_detail">
                                    <div class="border">
                                        <h2>Ben Stiller</h2>
                                    </div>
                                </div>
                                <div class="card_community card_detail">
                                    <div class="border">
                                        <h2>Ben Stiller</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};