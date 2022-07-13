import classes from './search-input.module.css';
import { FaSearch } from "react-icons/fa";
function SearchInput() {
    return (
        <div className={`${classes.search_container} d-flex`}>
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search for a movie..." aria-label="Search for a movie..."/>
        <div class="input-group-append d-flex">
          <button class="btn btn-outline-secondary" type="button"><FaSearch/></button>
        </div>
      </div>
        </div>
    );
}

export default SearchInput;
