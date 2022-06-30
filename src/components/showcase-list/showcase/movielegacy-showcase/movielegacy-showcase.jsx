import { Container, Col, Row } from "react-bootstrap";
import { ShowcaseListCard } from "../../showcase-list-card";
import ShowcaseTitle from "../../showcase-title";
// media query hook
import useMediaQuery from "../../../../hooks/useMediaquery";
import {useSelector} from 'react-redux'
export const Movielegacyshowcase = () => {
  const movielegacyData = useSelector((state) => state.homepage.movielegacy);
  // media query
  const isMobile = useMediaQuery("(min-width:320px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");

  const IMG_URL = "http://image.tmdb.org/t/p/w500/";



  let MovieLegacyUi;
  /* mobile */
  if (isMobile) {
    MovieLegacyUi = movielegacyData.map(
      (movie, index) =>
        index < 2 && (
          <ShowcaseListCard
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
    );
  }

  /* tablet */
  if (isTablet) {
    MovieLegacyUi = movielegacyData.map(
      (movie, index) =>
        index < 4 && (
          <ShowcaseListCard
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
    );
  }

  /* desktop */
  if (isDesktop) {
    MovieLegacyUi = movielegacyData.map(
      (movie, index) =>
        index < 5 && (
          <ShowcaseListCard
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
    );
  }

  return (
    <div className="wrap_fluid showcase">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <ShowcaseTitle titlemain="Movies legacy" linkto="/movielegacy" />
            </div>
            <div className=" d-flex flex-row gap-3">{MovieLegacyUi}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
