import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import Select from "react-select";
import classes from "./style.module.css";

function SortTable(props) {
  const { options, onClickSort } = props;
  // select
  const [selectedSort, setSelectedSort] = useState(null);
  // open filter table
  const [isOpenTable, setIsOpenTable] = useState(false);
  // handle open table
  const openTableHandle = () => {
    setIsOpenTable(false);
  };
  const closeTableHandle = () => {
    setIsOpenTable(true);
  };

  const handleSortChange = (selectedOption) => {
    setSelectedSort(selectedOption);
  };

  const handleSortClick = () => {
    onClickSort(selectedSort ? selectedSort.value : null);
  };

  return (
    <React.Fragment>
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
              value={selectedSort}
              onChange={handleSortChange}
              options={options}
            />
          </div>
        )}
      </div>
      <div
        className={`${classes.btn_search} d-flex justify-content-center ${
          selectedSort ? classes.active : classes.inactive
        }`}
        onClick={handleSortClick}
      >
        Search
      </div>
    </React.Fragment>
  );
}

export default SortTable;
