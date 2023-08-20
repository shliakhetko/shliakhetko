import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { HiMiniXMark, HiOutlineChevronUpDown, HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi2";

const TechnologyStackSort = (props) => {
  const { sortState, setSortState, resetSorts } = props;

  return (
    <div
      className={classNames(
        "TechnologyStackSort",
        sortState !== null && "TechnologyStackSort_Active"
      )}
    >
      <button
        className="TechnologyStackSort__Switch"
        onClick={() => {
          resetSorts();
          setSortState(!sortState);
        }}
      >
        <div className="TechnologyStackSort__Icon">
          {sortState===null ? <HiOutlineChevronUpDown /> : sortState===true ? <HiOutlineChevronDown/> : <HiOutlineChevronUp/>}
        </div>
        {props.children}
      </button>
      <button
        className="TechnologyStackSort__Close"
        onClick={() => {
          resetSorts();
          setSortState(sortState === null ? true : null);
        }}
      >
        <HiMiniXMark />
      </button>
    </div>
  );
};

TechnologyStackSort.propTypes = {
  sortState: PropTypes.bool,
  setSortState: PropTypes.func,
  resetSorts: PropTypes.func,
};

export default TechnologyStackSort;
