import { FaSearch } from 'react-icons/fa';
import classes from './style.module.css'

function SearchPage() {
  return (
    <div className={`${classes.search_container} d-flex align-items-start`}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a movie..."
          aria-label="Search for a movie..."
        />
        <div className="input-group-append d-flex">
          <button className="btn btn-outline-secondary rounded-0" type="button">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
