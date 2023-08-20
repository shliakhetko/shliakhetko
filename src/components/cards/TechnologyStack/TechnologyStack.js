import React, { useState } from "react";
import PropTypes from "prop-types";
import Technology from "./Technology";
import "./index.scss";
import classNames from "classnames";
import TechnologyStackSort from "./TechnologyStackSort";
import {
  technologiesLevels,
  technologiesTypes,
} from "../../../data/technologies";

const TechnologyStack = (props) => {
  const cards = props.cards;

  const [isExtended, setIsExtended] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const [sortByDefault, setSortByDefault] = useState(null);
  const [sortByName, setSortByName] = useState(null);
  const [sortByType, setSortByType] = useState(null);
  const [sortByLevel, setSortByLevel] = useState(null);

  const resetSorts = () => {
    setSortByDefault(null);
    setSortByName(null);
    setSortByType(null);
    setSortByLevel(null);
  };

  const filteredArray =
    sortByLevel !== null
      ? sortArrByCriteria(cards, "level", technologiesLevels, sortByLevel)
      : sortByType !== null
      ? sortArrByCriteria(cards, "type", technologiesTypes, sortByType)
      : sortByName !== null
      ? sortArrByName(cards, sortByName) 
      : sortByDefault === false
      ? [...cards].reverse()
      : cards;

  return (
    <div
      className={classNames(
        "TechnologyStack",
        isRotated && "TechnologyStack_Rotated"
      )}
    >
      <div className="TechnologyStack__Sorts">
        <TechnologyStackSort
          sortState={sortByDefault}
          setSortState={setSortByDefault}
          resetSorts={resetSorts}
        >
          By Default
        </TechnologyStackSort>
        <TechnologyStackSort
          sortState={sortByName}
          setSortState={setSortByName}
          resetSorts={resetSorts}
        >
          By Name
        </TechnologyStackSort>
        <TechnologyStackSort
          sortState={sortByType}
          setSortState={setSortByType}
          resetSorts={resetSorts}
        >
          By Type
        </TechnologyStackSort>
        <TechnologyStackSort
          sortState={sortByLevel}
          setSortState={setSortByLevel}
          resetSorts={resetSorts}
        >
          By Level
        </TechnologyStackSort>
        <button
          className="TechnologyStack__Rotate"
          onClick={() => {
            setIsRotated(!isRotated);
          }}
        >
          {!isRotated ? "Rotate" : "Unrotate"}
        </button>
      </div>
      <ul className="TechnologyStack__List">
        {filteredArray
          .slice(0, isExtended ? filteredArray.length : props.max)
          .map((card, i) => (
            <Technology key={i} index={i} content={card} />
          ))}
      </ul>
      <button
        className="TechnologyStack__Extend"
        onClick={() => {
          setIsExtended(!isExtended);
        }}
      >
        {isExtended ? "Hide" : "More"}
      </button>
    </div>
  );
};

const sortArrByName = (cards, direction = true) => {
  const answer = [...cards].sort((a, b) => a.title.localeCompare(b.title));
  return direction ? answer : answer.reverse();
}

const sortArrByCriteria = (cards, criteria, criteriaArr, direction = true) => {
  const answer = [...cards].reverse().sort((a, b) => {
    let sort = 0;
    Object.keys(criteriaArr).forEach((key, i) => {
      console.log(criteriaArr[key]);
      const type = criteriaArr[key];
      if (a[criteria] !== type && b[criteria] === type) sort = 1;
      if (a[criteria] === type && b[criteria] !== type) sort = -1;
    });
    return sort;
  });
  return direction ? answer.reverse() : answer;
};

TechnologyStack.propTypes = {
  cards: PropTypes.object,
  max: PropTypes.number,
};

export default TechnologyStack;
