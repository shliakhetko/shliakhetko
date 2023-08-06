import React from "react";
import PropTypes from "prop-types";
import "./index.scss"

const SectionTitle = (props) => {
  const textAlign = props.textAlign === "Center" ? {textAlign:"center"} : props.textAlign === "Right" ? {textAlign:"right"} : {}

  return <h2 style={textAlign} className="SectionTitle">{props.children}<span className="SectionTitle__OtherColorText">{props.additional}</span></h2>;
};

SectionTitle.propTypes = {
  additional: PropTypes.string,
  textAlign: PropTypes.string,
};

export default SectionTitle;
