import React from "react";
import PropTypes from "prop-types";

const ProjectTopics = (props) => {
    const topics = [...props.topics].slice(0,3);
  return (
    <ul className="ProjectTopics">
      {topics.map((topic, i) => (
        <li key={i} className="ProjectTopics__Topic">
          <a
            href={"https://github.com/topics/" + topic}
            target="_blank"
            rel="noreferrer"
          >
            #{topic}
          </a>
        </li>
      ))}
    </ul>
  );
};

ProjectTopics.propTypes = {
  topics: PropTypes.array,
};

export default ProjectTopics;
