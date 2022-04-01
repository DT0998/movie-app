import { Link } from "react-router-dom";
import { Buttonviewmore } from "../buttons/button-viewmore/button-viewmore";

function ShowcaseTitle(props) {
    return ( 
        <div className="d-flex justify-content-between align-items-center my-3">
        <h1
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          {" "}
          {props.titlemain}
        </h1>
        <Link to={props.linkto}>
          <Buttonviewmore />
        </Link>
      </div> 
     );
}

export default ShowcaseTitle;