import "./featuredetail.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export const Featuredetail = () => {
  const [movietrending, setMovietrending] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/trending/all/day?" + API_KEY;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  // fetch movie api

  useEffect(() => {
    const getTrending = async function () {
      let response = await axios.get(API_URL);
      let data = response.data;
      setMovietrending(data.results);
      console.log(data);
    };
    getTrending();
  }, [API_URL]);

  // use aos
  Aos.init();



  return (
    <div className="wrap_fluid trending_detail">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <div className="d-flex justify-content-between align-items-center justify-content-center px-lg-3">
                <h2 className="trending_title" data-aos="fade-right" data-aos-duration="1500">
                  {" "}
                  TRENDING
                </h2>
              </div>
              <div className=" d-flex flex-row flex-wrap justify-content-center" data-aos="fade-down" data-aos-duration="1500">
                {movietrending.map(
                  (movie, index) =>
                   (
                      <Card className="card_container mx-2 my-2" key={movie.id}>
                        <img
                          src={IMG_URL + movie.poster_path}
                          alt={movie.original_name}
                          className="img_feature card-img-top"
                        />
                        <div className="card-body card_trending">
                          <p className="card-text">{movie.title}</p>
                          <p className="card-text">{movie.release_date}</p>
                          <p className="card-text">{movie.vote_average}</p>
                        </div>
                      </Card>
                    )
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
