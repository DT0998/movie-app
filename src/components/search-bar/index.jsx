import classes from "./search-bar.module.css";
import { FaSearch } from "react-icons/fa";
function SearchInput() {
  return (
    <div className={`${classes.search_container} d-flex`}>
      <div className="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search for a movie..."
          aria-label="Search for a movie..."
        />
        <div className="input-group-append d-flex">
          <button className="btn btn-outline-secondary" type="button">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
