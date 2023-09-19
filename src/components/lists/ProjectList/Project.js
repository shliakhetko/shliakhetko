import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import GitHubIcon from "../../icons/GitHubIcon";
import ProjectLanguages from "./partials/ProjectLanguages";
import ProjectTopics from "./partials/ProjectTopics";
import ProjectTechnologies from "./partials/ProjectTechnologies";
import classNames from "classnames";

const Project = (props) => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const [isTurned, setIsTurned] = useState(props.content.isTurned);
  const [imageHeight, setImageHeight] = useState(null);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const content = props.content;

  const {
    name,
    image,
    stack,
    description,
    homepage,
    gitHublUrl,
    topics,
    languagesUrl,
    // scrollTime,
  } = content;

  const [languages, setLanguages] = useState(null);

  useLayoutEffect(() => {
    setImageHeight({
      sum: imageRef.current.offsetHeight + containerRef.current.offsetHeight,
      diff: imageRef.current.offsetHeight - containerRef.current.offsetHeight,
      image: imageRef.current.offsetHeight,
      container: containerRef.current.offsetHeight,
    });
  }, [imageRef]);

  useEffect(() => {
    if (!languages) {
      fetch(languagesUrl)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          setLanguages(res);
        });
    }
    console.log(isImageHovered);
  });

  return (
    <li className="Project">
      <span className="Project__Title">{name}</span>
      <div ref={containerRef} className="Project__Preview">
        <img
          onMouseEnter={() => {
            setIsImageHovered(true);
          }}
          onMouseLeave={() => {
            setIsImageHovered(false);
          }}
          ref={imageRef}
          style={{
            bottom: `-${imageHeight?.image}px`,
            // transform: isImageHovered
            //   ? `translateY(-${imageHeight?.diff}px)`
            //   : "translateY(0px)",
          }}
          className="Project__Image"
          src={image}
          alt={name}
        />
      </div>
      <div className="Project__Info">
        <span className="Project__Title">{name}</span>
        <button
          className={classNames(
            "ProjectTurn",
            isTurned && "ProjectTurn_Turned"
          )}
          onClick={() => {
            setIsTurned(!isTurned);
          }}
        >
          {/* <HiArrowUturnLeft /> */}
          <div className="ProjectTurn__Top">
            <div className="ProjectTurn__Left" />
            <div className="ProjectTurn__Right" />
          </div>
          <div
            className="ProjectTurn__Body"
            style={{
              height: isTurned ? "2rem" : "1rem",
            }}
          />
        </button>
        {isTurned ? (
          <>
            {languages && <ProjectLanguages languages={languages} />}
            {topics && <ProjectTopics topics={topics} />}
            {stack && <ProjectTechnologies technologies={stack} />}
          </>
        ) : (
          <p className="Project__Description">{description}</p>
        )}

        <div className="Project__Buttons">
          <a
            className="Project__VisitWebsite"
            href={homepage}
            target="_blank"
            rel="noreferrer"
          >
            Visit Website
          </a>
          <a
            className="Project__GitHub"
            href={gitHublUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </li>
  );
};

Project.propTypes = {
  content: PropTypes.object,
};

export default Project;
