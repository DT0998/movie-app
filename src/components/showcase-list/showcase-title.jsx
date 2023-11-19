import { Link } from "react-router-dom";
import ButtonViewMore from "../Button/ButtonViewMore";

function ShowcaseTitle(props) {
  return (
    <div className="d-flex justify-content-between align-items-center my-3">
      <h1> {props.titlemain}</h1>
      <Link to={props.linkto}>
        <ButtonViewMore />
      </Link>
    </div>
  );
}

export default ShowcaseTitle;
