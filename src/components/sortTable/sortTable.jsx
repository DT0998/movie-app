import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import Select from "react-select";
import "./sortTable.css";

//option
const options = [
  { value: "Popularity Descending", label: "Popularity Descending" },
  { value: "Popularity Ascending", label: "Popularity Ascending" },
  { value: "Rating Descending", label: "Rating Descending" },
  { value: "Rating Ascending", label: "Rating Ascending" },
];

function SortTable() {
  // select
  const [Selected, setSelected] = useState(false);
  // open filter table
  const [isOpenTable, setIsOpenTable] = useState(false);
  // handle open table

  return (
    <div className="wrap">
      <div className="filter_panel my-3">
        {isOpenTable ? (
          <div className="name d-flex justify-content-between align-items-center" onClick={()=>setIsOpenTable(false)}>
            <span>Sort</span>
            <FaChevronDown />
          </div>
        ) : (
          <div className="name d-flex justify-content-between align-items-center" onClick={()=>setIsOpenTable(true)}>
            <span>Sort</span>
            <FaChevronRight />
          </div>
        )}
        {isOpenTable && (
          <div className="filter d-flex flex-column">
            <span>Sort Results By</span>
            <Select
              className="my-2"
              defaultValue={Selected}
              onChange={setSelected}
              options={options}
            ></Select>
          </div>
        )}
      </div>
      <div
        className={`d-flex justify-content-center ${
          Selected  ? "search_btn" : "disable search_btn"
        }`}
      >
        Search
      </div>
    </div>
  );
}

export default SortTable;
