import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShowcaseTitle from "../../showcase-title";
import { ShowcaseListCard } from "../../showcase-list-card";
// media query hook
import useMediaQuery from "../../../../hooks/useMediaquery";
import axios from "axios";

export const Tvshowcase = () => {
  const [tvshows, setTVshows] = useState([]);
  // skeleton loading
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
  }, [API_URL]);

  let TvShowUi;
  /* mobile */
  if (isMobile) {
    TvShowUi = tvshows.map(
      (tvshow, index) =>
        index < 2 && (
          <ShowcaseListCard
            key={tvshow.id}
            type="tvshow"
            id={tvshow.id}
            img_url={IMG_URL}
            poster_path={tvshow.poster_path}
            originalalt={tvshow.original_name}
            originaltitle={tvshow.original_name}
            title={tvshow.title}
            first_air_date={tvshow.first_air_date}
            release_date={tvshow.release_date}
            vote_average={tvshow.vote_average}
          />
        )
    );
  }

  /* tablet */
  if (isTablet) {
    TvShowUi = tvshows.map(
      (tvshow, index) =>
        index < 4 && (
          <ShowcaseListCard
            key={tvshow.id}
            type="tvshow"
            id={tvshow.id}
            img_url={IMG_URL}
            poster_path={tvshow.poster_path}
            originalalt={tvshow.original_name}
            originaltitle={tvshow.original_name}
            title={tvshow.title}
            first_air_date={tvshow.first_air_date}
            release_date={tvshow.release_date}
            vote_average={tvshow.vote_average}
          />
        )
    );
  }

  /* desktop */
  if (isDesktop) {
    TvShowUi = tvshows.map(
      (tvshow, index) =>
        index < 5 && (
          <ShowcaseListCard
            key={tvshow.id}
            type="tvshow"
            id={tvshow.id}
            img_url={IMG_URL}
            poster_path={tvshow.poster_path}
            originalalt={tvshow.original_name}
            originaltitle={tvshow.original_name}
            title={tvshow.title}
            first_air_date={tvshow.first_air_date}
            release_date={tvshow.release_date}
            vote_average={tvshow.vote_average}
          />
        )
    );
  }

  return (
    <div className="wrap_fluid showcase">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <ShowcaseTitle titlemain="TV" linkto="/tvshow" />
            </div>
            <div className=" d-flex flex-row gap-3">{TvShowUi}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
