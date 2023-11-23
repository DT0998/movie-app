import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import Select from "react-select";
import classes from "./style.module.css";

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
  const openTableHandle = () => {
    setIsOpenTable(false);
  };
  const closeTableHandle = () => {
    setIsOpenTable(true);
  };

  return (
    <div>
      <div className={`${classes.filter_panel} my-3`}>
        {isOpenTable ? (
          <div
            className="d-flex justify-content-between align-items-center"
            onClick={openTableHandle}
          >
            <span>Sort</span>
            <FaChevronDown />
          </div>
        ) : (
          <div
            className="d-flex justify-content-between align-items-center"
            onClick={closeTableHandle}
          >
            <span>Sort</span>
            <FaChevronRight />
          </div>
        )}
        {isOpenTable && (
          <div className={`${classes.filter} d-flex flex-column`}>
            <span>Sort Results By</span>
            <Select
              className="my-2"
              defaultValue={Selected}
              onChange={setSelected}
              options={options}
            />
          </div>
        )}
      </div>
      <div
        className={`${classes.btn_search} d-flex justify-content-center ${
          Selected ? classes.Active : classes.inActive
        }`}
      >
        Search
      </div>
    </div>
  );
}

export default SortTable;
