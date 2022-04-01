import axios from "axios";
import Aos from "aos";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// media query hook
import useMediaQuery from "../../../hooks/useMediaquery";
import { ShowcaseBody } from "../showcasebody";
import ShowcaseTitle from "../showcasetitle";

export const Tvshowcase = () => {
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
  const getTvshow = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setTVshows(data.results);
  };
  useEffect(() => {
    getTvshow();
    // use aos
    Aos.init();
  }, [API_URL]);

  return (
    <div className="wrap_fluid showcase w-100">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <ShowcaseTitle titlemain="TV SHOWS" linkto="/tvshow" />
            </div>
            <div
              className=" d-flex flex-row gap-3"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              {/* desktop */}
              {isDesktop
                ? tvshows.map(
                    (tvshow, index) =>
                      index < 5 && (
                        <ShowcaseBody
                          classNameCard="card_container isDesktop"
                          key={tvshow.id}
                          type="tv"
                          id={tvshow.id}
                          img_url={IMG_URL}
                          poster_path={tvshow.poster_path}
                          originalalt={tvshow.original_name}
                          classNameImg="img_showcase card-img-top"
                          classNameCardBody="card-body card_showcase"
                          classNameTitle="card-text card-title"
                          originaltitle={tvshow.original_name}
                          title={tvshow.title}
                          classNameText="card-text"
                          first_air_date={tvshow.first_air_date}
                          vote_average={tvshow.vote_average}
                        />
                      )
                  )
                : null}
              {/* tablet */}
              {isTablet
                ? tvshows.map(
                    (tvshow, index) =>
                      index < 4 && (
                        <ShowcaseBody
                          classNameCard="card_container isTablet"
                          key={tvshow.id}
                          type="tv"
                          id={tvshow.id}
                          img_url={IMG_URL}
                          poster_path={tvshow.poster_path}
                          originalalt={tvshow.original_name}
                          classNameImg="img_showcase card-img-top"
                          classNameCardBody="card-body card_showcase"
                          classNameTitle="card-text card-title"
                          originaltitle={tvshow.original_name}
                          title={tvshow.title}
                          classNameText="card-text"
                        />
                      )
                  )
                : null}
              {/* mobile */}
              {isMobile
                ? tvshows.map(
                    (tvshow, index) =>
                      index < 2 && (
                        <ShowcaseBody
                          classNameCard="card_container isMobile"
                          key={tvshow.id}
                          type="tv"
                          id={tvshow.id}
                          img_url={IMG_URL}
                          poster_path={tvshow.poster_path}
                          originalalt={tvshow.original_name}
                          classNameImg="img_showcase card-img-top"
                          classNameCardBody="card-body card_showcase"
                          classNameTitle="card-text card-title"
                          originaltitle={tvshow.original_name}
                          title={tvshow.title}
                          classNameText="card-text"
                        />
                      )
                  )
                : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
