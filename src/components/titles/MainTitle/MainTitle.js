import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const MainTitle = (props) => {
  return <h1 className="MainTitle">{props.firstPart} <span className="MainTitle__OtherColorText">{props.secondPart}</span></h1>;
};

MainTitle.propTypes = {
  firstPart: PropTypes.string,
  secondPart: PropTypes.string,
};

export default MainTitle;
