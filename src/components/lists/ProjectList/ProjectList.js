import React, { useState } from "react";
import PropTypes from "prop-types";
import Project from "./Project";
import "./index.scss";

const ProjectList = (props) => {
  const [showAll, setShowAll] = useState(false);
  const list = props.list;

  return (
    <div className="ProjectList">
      <ul className="ProjectList__List">
        {list &&
          [...list]
            .slice(0, showAll ? list.length : props.max)
            .map((project, i) => <Project key={i} content={project} />)}
      </ul>
      <button
        className="ProjectList__Show"
        onClick={() => {
          setShowAll(!showAll);
        }}
      >
        {showAll ? "Hide" : "Show"}
      </button>
    </div>
  );
};

ProjectList.propTypes = {
  list: PropTypes.array,
  max: PropTypes.number,
};

export default ProjectList;
