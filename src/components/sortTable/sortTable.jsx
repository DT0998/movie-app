import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Select from 'react-select';
import './sortTable.css'

//option
const options = [
    { value: 'Popularity Descending', label: "Popularity Descending" },
    { value: 'Popularity Ascending', label: "Popularity Ascending" },
    { value: 'Rating Descending', label: "Rating Descending" },
    { value: 'Rating Ascending', label: "Rating Ascending" },
  ];

function SortTable() {
    const [Selected, setSelected] = useState(false);
    return ( 
        <div className="wrap">
        <div className="filter_panel my-3">
          <div className="name d-flex justify-content-between align-items-center">
            <span>Sort</span>
          <FaChevronRight className="chevron active"/>
          </div>
          
          <div className="filter d-flex flex-column">
            <span>Sort Results By</span>
            <Select className="my-2"
              defaultValue={Selected} onChange={setSelected}
              options={options}>
            </Select>
          </div>
        </div>
        <div
          className={`d-flex justify-content-center ${Selected ? "search_btn" : "disable search_btn"}`}
        >
          Search
        </div>
      </div>
     );
}

export default SortTable;