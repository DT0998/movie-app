import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./tvshow.css";
// media query hook
import useMediaQuery from "../../hooks/useMediaquery";
import { Buttonviewmore } from "../buttons/button-viewmore/button-viewmore";

export const Tvshow = () => {
  const [tvshows, setTVshows] = useState([]);

  // media query
  const isMobile = useMediaQuery("(min-width:320px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");

  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/tv/popular?" + API_KEY;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  // fetch movie api
  useEffect(() => {
    let isMounted = true;
    const getTvshow = async function () {
      let response = await axios.get(API_URL);
      let data = response.data;
      if(isMounted){
        setTVshows(data.results);
      }
      console.log(data);
    };
    getTvshow();
    return ()=>{
      isMounted = false;
    }
  }, [API_URL]);

  return (
    <div className="wrap_fluid feature w-100">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <div className="d-flex justify-content-between align-items-center my-3">
                <h1 className="introduce_title" data-aos="fade-right" data-aos-duration="1500"> TV SHOWS</h1>
                <Link to="/tvshow">
                <Buttonviewmore></Buttonviewmore>
                </Link>
              </div>
              <div className=" d-flex flex-row gap-3" data-aos="fade-down" data-aos-duration="1500">
                {/* desktop */}
                {isDesktop ? tvshows.map(
                  (tvshow, index) =>
                    index < 5 && (
                      <Card className="card_container isDesktop" key={tvshow.id}>
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
                ) : null}
                {/* tablet */}
                {isTablet ? tvshows.map(
                  (tvshow, index) =>
                    index < 4 && (
                      <Card className="card_container isTablet" key={tvshow.id}>
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
                ) : null}
                {/* mobile */}
                {isMobile ? tvshows.map(
                  (tvshow, index) =>
                    index < 2 && (
                      <Card className="card_container isMobile" key={tvshow.id}>
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
                ) : null}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
