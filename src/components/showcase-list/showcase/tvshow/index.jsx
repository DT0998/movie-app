import ShowcaseTitle from "../../showcase-title";
import { ShowcaseListCard } from "../../showcase-list-card";
// media query hook
import useMediaQuery from "../../../../hooks/useMediaquery";

import { useSelector } from "react-redux";
import { selectorTvshow } from "../../../../redux/pages/home/slice";
export const Tvshowcase = () => {
  // media query
  const isMobile = useMediaQuery("(min-width:320px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");

  const IMG_URL = "http://image.tmdb.org/t/p/w500/";
  const tvshowData = useSelector(selectorTvshow);

  let TvShowUi;
  /* mobile */
  if (isMobile) {
    TvShowUi = tvshowData.map(
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
    TvShowUi = tvshowData.map(
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
    TvShowUi = tvshowData.map(
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
    <div className="showcase">
      <div>
        <div>
          <div>
            <ShowcaseTitle titlemain="TV" linkto="/tvshow" />
            <div className=" d-flex flex-row gap-3">{TvShowUi}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
