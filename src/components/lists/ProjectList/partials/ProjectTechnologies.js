import React from "react";
import PropTypes from "prop-types";
import technologies from "../../../../data/technologies";

const ProjectTechnologies = (props) => {
  return (
    <ul className="ProjectTechnologies">
      {props.technologies.map((technologySlug, i) => {
        let technology;
        technologies.forEach((info) => {
          if (info.slug === technologySlug) technology = info;
        });
        const { slug, title, thumbnail } = technology;
        return <li className="ProjectTechnologies__Technology" title={title}><img src={thumbnail} alt={title}/></li>;
      })}
    </ul>
  );
};

ProjectTechnologies.propTypes = {
  technologies: PropTypes.array,
};

export default ProjectTechnologies;
