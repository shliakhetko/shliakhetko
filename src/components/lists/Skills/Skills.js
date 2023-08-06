import React from "react";
import PropTypes from "prop-types";
import Skill from "./Skill";
import "./index.scss";

const Skills = (props) => {
  return (
    <ul className="Skills">
      {props.list.map((skill, i) => (
        <Skill key={i} content={skill} />
      ))}
    </ul>
  );
};

Skills.propTypes = {
  list: PropTypes.array,
};

export default Skills;
