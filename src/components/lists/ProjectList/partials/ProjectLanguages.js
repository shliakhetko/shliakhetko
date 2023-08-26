import React, { useRef } from "react";
import PropTypes from "prop-types";

const ProjectLanguages = (props) => {
  const languages = props.languages;
  const languagesKeys = Object.keys(languages);

  const charactersSum = languagesKeys.reduce(
    (sum, key) => sum + languages[key],
    0
  );

  const characterToPercent = 100 / charactersSum;

  const ref = useRef(null);

  return (
    <ul ref={ref} className="ProjectLanguages">
      {languagesKeys.map((key, i) => {
        const percentage =
          Math.round(languages[key] * characterToPercent * 10) / 10;
        return (
          <>
            <li
            key={i*2}
              className="ProjectLanguages__Language"
              title={`${key} ${percentage}%`}
              style={{
                width: `${percentage < 2 ? 2 : percentage}%`,
                paddingLeft: percentage > 20 && "0.5rem",
                borderRadius: `${percentage <= 2 ? 0.15 : 0.2}rem`,
                opacity: 1 - i * 0.15,
              }}
            >
              {percentage > 20 && key}
            </li>
            {languagesKeys.length !== i + 1 && (
              <li key={i*2+1} className="ProjectLanguages__Space" />
            )}
          </>
        );
      })}
    </ul>
  );
};

ProjectLanguages.propTypes = {
  languages: PropTypes.object,
};

export default ProjectLanguages;
