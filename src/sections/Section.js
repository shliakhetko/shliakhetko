import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Section = (props) => {
  return (
    <section id={props.id} style={{padding:"2rem 0.5rem"}} className={classNames(props.className, "Section")}>
      <div style={{margin:"auto"}} className={props.isRow ? "Row" : ""}>{props.children}</div>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  isRow: PropTypes.bool,
};

export default Section;
