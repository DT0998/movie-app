import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./tvshowlist.css";

export const Tvshowlist = () => {
  const [tvshows, setTVshows] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/tv/popular?" + API_KEY;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  // fetch movie api

  useEffect(() => {
    const getTvshow = async function () {
      let response = await axios.get(API_URL);
      let data = response.data;
      setTVshows(data.results);
      console.log(data);
    };
    getTvshow();
  }, [API_URL]);

  // use aos
  Aos.init();

  return (
    <div className="wrap_fluid tvshow_list">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <div className="d-flex justify-content-between align-items-center justify-content-center px-lg-3">
                <h2
                  className="trending_title"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  TV SHOWS
                </h2>
              </div>
              <div
                className=" d-flex flex-row flex-wrap justify-content-center"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                {tvshows.map(
                  (tvshow, index) =>
 (
                      <Card className="card_container mx-2 my-2" key={tvshow.id}>
                        <img
                          src={IMG_URL + tvshow.poster_path}
                          alt={tvshow.original_name}
                          className="img_feature card-img-top"
                        />
                        <div className="card-body card_trending">
                          <p className="card-text">{tvshow.original_name}</p>
                          <p className="card-text">{tvshow.first_air_date}</p>
                          <p className="card-text">{tvshow.vote_average}</p>
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
