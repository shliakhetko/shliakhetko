import React from "react";
import PropTypes from "prop-types";

const Skill = (props) => {
  const { title, description, Icon } = props.content;
  return (
    <li className="Skill">
      <div className="Skill__Icon">
        <Icon />
        <div className="Skill__GlareWrapper">
          <div className="Skill__Glare"></div>
        </div>
      </div>
      <div className="Skill__Content">
        <div className="Skill__Info">
          <span className="Skill__Title">{title}</span>
          <p className="Skill__Description">{description}</p>
        </div>
      </div>
    </li>
  );
};

Skill.propTypes = {
  content: PropTypes.object,
};

export default Skill;
