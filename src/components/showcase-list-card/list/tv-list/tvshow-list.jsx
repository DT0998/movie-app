import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Buttonsquare } from "../../../buttons/button-square/button-square";
import SortTable from "../../../sortTable/sortTable";
import ListTitle from "../../list-title";
import "../../card.css";
import "../../list.css";
import { Cards } from "../../card";


export const Tvshowlist = () => {
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState();
  const [tvshows, setTVshows] = useState([]);
  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const PAGE = "&page=" + page;
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/tv/popular?" + API_KEY + PAGE;
  const IMG_URL = "http://image.tmdb.org/t/p/w500/";

  // fetch movie api
  const getTvshow = async function () {
    let response = await axios.get(API_URL);
    let data = response.data;
    setTVshows([...tvshows, ...data.results]);
    setTotalpage(data.total_pages);
  };
  useEffect(() => {
    getTvshow();
  }, [API_URL]);

  // load more
  const loadMore = () => {
    setPage(page + 1);
  };

  // use aos
  Aos.init();

  // option

  return (
    <div className="wrap_fluid list w-100">
      <Container>
        <Row>
          <Col>
            <div className="wrap">
              <ListTitle classNameTitle="title_content" titlemain="TV SHOW" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={3}>
          <SortTable />
          </Col>
          <Col xs={12} md={8} lg={9}>
            <div
              className=" d-flex flex-row flex-wrap justify-content-center"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              {tvshows.map((tvshow) => (
                <Cards
                  classNameCard="card_container mx-2 my-2"
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
                  release_date={tvshow.release_date}
                  vote_average={tvshow.vote_average}
                />
              ))}
              {page < totalpage ? (
                <Buttonsquare
                  onClick={loadMore}
                  className="btn_loadmore"
                  title="load more"
                />
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
