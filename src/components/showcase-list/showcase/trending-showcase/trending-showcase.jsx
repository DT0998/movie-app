import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ShowcaseListCard } from "../../showcase-list-card";
import ShowcaseTitle from "../../showcase-title";
// media query hook
import useMediaQuery from "../../../../hooks/useMediaquery";
import axios from "axios";

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
  }, [API_URL]);

  let TrendingUi;
    /* mobile */
    if (isMobile) {
       TrendingUi = (movietrending.map(
        (movie, index) =>
          index < 2 && (
            <ShowcaseListCard
              key={movie.id}
              type="movie"
              id={movie.id}
              img_url={IMG_URL}
              poster_path={movie.poster_path}
              originalalt={movie.title}
              originaltitle={movie.original_name}
              title={movie.title}
              classNameText="card-text"
              first_air_date={movie.first_air_date}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
          )
      ));
    }
    
    /* tablet */
    if (isTablet) {
      TrendingUi = (movietrending.map(
        (movie, index) =>
          index < 4 && (
            <ShowcaseListCard
              key={movie.id}
              type="movie"
              id={movie.id}
              img_url={IMG_URL}
              poster_path={movie.poster_path}
              originalalt={movie.title}
              originaltitle={movie.original_name}
              title={movie.title}
              classNameText="card-text"
              first_air_date={movie.first_air_date}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
          )
      ));
    }

    /* desktop */
    if (isDesktop) {
      TrendingUi = (movietrending.map(
        (movie, index) =>
          index < 5 && (
            <ShowcaseListCard
              key={movie.id}
              type="movie"
              id={movie.id}
              img_url={IMG_URL}
              poster_path={movie.poster_path}
              originalalt={movie.title}
              originaltitle={movie.original_name}
              title={movie.title}
              first_air_date={movie.first_air_date}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
          )
      ));
    }

  return (
    <div className="wrap_fluid showcase">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <ShowcaseTitle titlemain="Trending" linkto="/trending" />
            </div>
            <div className=" d-flex flex-row gap-3">
              {TrendingUi}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
