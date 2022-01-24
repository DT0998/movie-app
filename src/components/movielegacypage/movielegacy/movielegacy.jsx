import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import "./movielegacy.css";

export const Movielegacy = () => {
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/movie/top_rated?" + API_KEY;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  // fetch movie api
  const [movietoprate, setMovietoprate] = useState([]);

  useEffect(() => {
    const getTrending = async function () {
      let response = await axios.get(API_URL);
      let data = response.data;
      setMovietoprate(data.results);
      console.log(data);
    };
    getTrending();
  }, [API_URL]);

  // use aos
  Aos.init();

  return (
    <div className="wrap_fluid feature">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <div className="d-flex justify-content-between align-items-center">
                <h1
                  className="trending_title"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  {" "}
                  MOVIES LEGACY
                </h1>
              </div>
              <div
                className=" d-flex flex-row gap-3"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                {movietoprate.map(
                  (movie, index) =>
                    index < 5 && (
                      <Card className="card_container" key={movie.id}>
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
