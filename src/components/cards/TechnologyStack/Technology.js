import React from "react";
import PropTypes from "prop-types";

const Technology = (props) => {
  const { title, type, thumbnail, description, link, level } = props.content;
  return (
    <li className="Technology">
      <div className="Technology__Wrapper">
        <div className="Technology__Content">
          <div className="Technology__Thumbnail">
            <img src={thumbnail} alt={title} />
          </div>
          <span className="Technology__Title">{title}</span>
        </div>
        <div className="Technology__BackContent">
          <span className="Technology__BackTitle">{title}</span>
          <span style={{ color: level.color }} className="Technology__Level">
            {level.text}
          </span>
          <p className="Technology__Description">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="Technology__Link"
          >
            Learn More
          </a>
        </div>
      </div>
    </li>
  );
};

Technology.propTypes = {
  content: PropTypes.object,
  index: PropTypes.number,
};

export default Technology;
