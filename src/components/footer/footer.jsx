import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css'
import logo from '../../assets/footer/logo.svg'
import { faFacebook, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap'


export const Footer = () => {
    return (
        <div className="wrap_fluid footer">
            <Container>
                <Row>
                    <Col>
                        <div className="wrap">
                            <a href='/'><img src={logo} className="logo" alt='logo'></img></a>
                        </div>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <div className='text-center'>
                            <FontAwesomeIcon icon={faGithub} alt='' className="logo_social logo_github" ></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faDiscord} alt='' className="logo_social logo_discord" ></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faFacebook} alt='' className="logo_social logo_facebook" ></FontAwesomeIcon>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className='text-center my-lg-1'>
                            <span className="contract">ĐIỀU KHOẢN DỊCH VỤ</span>
                            <span className="contract">DCMA</span>
                            <span className="contract">LIÊN HỆ</span>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className='text-center my-lg-1'>
                            <span className="copyright">&copy; 2021 Movie and Chill</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};