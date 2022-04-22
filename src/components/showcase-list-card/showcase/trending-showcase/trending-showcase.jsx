import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// media query hook
import useMediaQuery from "../../../../hooks/useMediaquery";
import ShowcaseTitle from "../../showcase-title";
import { Cards } from "../../card";

export const Trendingshowcase = () => {
  const [movietrending, setMovietrending] = useState([]);
  // media query
  const isMobile = useMediaQuery("(min-width:320px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");

  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/trending/movie/day?" + API_KEY;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  // fetch movie api
  const getTrending = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setMovietrending(data.results);
  };
  useEffect(() => {
    getTrending();
    // use aos
    Aos.init();
  }, [API_URL]);

  return (
    <div className="wrap_fluid showcase w-100">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <ShowcaseTitle titlemain="Trending" linkto="/trending" />
            </div>
            <div
              className=" d-flex flex-row gap-3"
              data-aos="fade-down"
            >
              {/* desktop */}
              {isDesktop
                && movietrending.map(
                    (movie, index) =>
                      index < 5 && (
                        <Cards
                          classNameCard="card_container isDesktop"
                          key={movie.id}
                          type="movie"
                          id={movie.id}
                          img_url={IMG_URL}
                          poster_path={movie.poster_path}
                          originalalt={movie.title}
                          classNameImg="img_showcase card-img-top"
                          classNameCardBody="card-body card_showcase"
                          classNameTitle="card-text card-title"
                          originaltitle={movie.original_name}
                          title={movie.title}
                          classNameText="card-text"
                          first_air_date={movie.first_air_date}
                          release_date={movie.release_date}
                          vote_average={movie.vote_average}
                        />
                      )
                  )
                }
              {/* tablet */}
              {isTablet
                && movietrending.map(
                    (movie, index) =>
                      index < 4 && (
                        <Cards
                          classNameCard="card_container isTablet"
                          key={movie.id}
                          type="movie"
                          id={movie.id}
                          img_url={IMG_URL}
                          poster_path={movie.poster_path}
                          originalalt={movie.title}
                          classNameImg="img_showcase card-img-top"
                          classNameCardBody="card-body card_showcase"
                          classNameTitle="card-text card-title"
                          originaltitle={movie.original_name}
                          title={movie.title}
                          classNameText="card-text"
                          first_air_date={movie.first_air_date}
                          release_date={movie.release_date}
                          vote_average={movie.vote_average}
                        />
                      )
                  )
                }
              {/* mobile */}
              {isMobile
                && movietrending.map(
                    (movie, index) =>
                      index < 2 && (
                        <Cards
                          classNameCard="card_container isMobile"
                          key={movie.id}
                          type="movie"
                          id={movie.id}
                          img_url={IMG_URL}
                          poster_path={movie.poster_path}
                          originalalt={movie.title}
                          classNameImg="img_showcase card-img-top"
                          classNameCardBody="card-body card_showcase"
                          classNameTitle="card-text card-title"
                          originaltitle={movie.original_name}
                          title={movie.title}
                          classNameText="card-text"
                          first_air_date={movie.first_air_date}
                          release_date={movie.release_date}
                          vote_average={movie.vote_average}
                        />
                      )
                  )
                }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
