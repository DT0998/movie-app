import { Container, Row, Col } from "react-bootstrap";
import { ShowcaseListCard } from "../../showcase-list-card";
import ShowcaseTitle from "../../showcase-title";
// media query hook
import useMediaQuery from "../../../../hooks/useMediaquery";
import { useSelector } from "react-redux";
import { selectorMovie } from "../../../../redux/pages/home/slice";
export const Trendingshowcase = () => {
  const movieData = useSelector(selectorMovie);
  // media query
  const isMobile = useMediaQuery("(min-width:320px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  let TrendingUi;
  /* mobile */
  if (isMobile) {
    TrendingUi = movieData.map(
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
    );
  }

  /* tablet */
  if (isTablet) {
    TrendingUi = movieData.map(
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
    );
  }

  /* desktop */
  if (isDesktop) {
    TrendingUi = movieData.map(
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
    );
  }

  return (
    <div className="wrap_fluid showcase">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <ShowcaseTitle titlemain="Trending" linkto="/trending" />
            </div>
            <div className=" d-flex flex-row gap-3">{TrendingUi}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
