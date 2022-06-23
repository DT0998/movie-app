import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
// media query hook
import useMediaQuery from "../../../../hooks/useMediaquery";
import ShowcaseTitle from "../../showcase-title";
import { Cards } from "../../card";

export const Movielegacyshowcase = () => {
  const [movielegacy, setMovielegacy] = useState([]);
  // media query
  const isMobile = useMediaQuery("(min-width:320px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");

  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/movie/top_rated?" + API_KEY;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  // fetch movie api
  const getLegacy = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setMovielegacy(data.results);
  };
  useEffect(() => {
    getLegacy();
  }, [API_URL]);

  return (
    <div className="wrap_fluid showcase" >
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <ShowcaseTitle titlemain="Movies legacy" linkto="/movielegacy" />
            </div>
            <div
              className=" d-flex flex-row gap-3"
            >
              {/* desktop */}
              {isDesktop
                && movielegacy.map(
                    (movie, index) =>
                      index < 5 && (
                        <Cards
                          key={movie.id}
                          type="movie"
                          id={movie.id}
                          img_url={IMG_URL}
                          poster_path={movie.poster_path}
                          originalalt={movie.original_name}
                          originaltitle={movie.original_name}
                          title={movie.title}
                          first_air_date={movie.first_air_date}
                          release_date={movie.release_date}
                          vote_average={movie.vote_average}
                        />
                      )
                  )
                }
              {/* tablet */}
              {isTablet
                && movielegacy.map(
                    (movie, index) =>
                      index < 4 && (
                        <Cards
                          key={movie.id}
                          type="movie"
                          id={movie.id}
                          img_url={IMG_URL}
                          poster_path={movie.poster_path}
                          originalalt={movie.original_name}
                          originaltitle={movie.original_name}
                          title={movie.title}
                          first_air_date={movie.first_air_date}
                          release_date={movie.release_date}
                          vote_average={movie.vote_average}
                        />
                      )
                  )
                }
              {/* mobile */}
              {isMobile
                && movielegacy.map(
                    (movie, index) =>
                      index < 2 && (
                        <Cards
                          key={movie.id}
                          type="movie"
                          id={movie.id}
                          img_url={IMG_URL}
                          poster_path={movie.poster_path}
                          originalalt={movie.original_name}
                          originaltitle={movie.original_name}
                          title={movie.title}
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
