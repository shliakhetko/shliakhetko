import React from "react";
import MainTitle from "../../components/titles/MainTitle/MainTitle";
import { MainCaption } from "../../components/paragraphs/MainCaption/MainCaption";
import { DeveloperThumbnail } from "../../components/thumbnails/DeveloperThumbnail/DeveloperThumbnail";
import "./index.scss";

export const Introduction = () => {
  return (
    <div className="Introduction Row">
      <div className="Introduction__InfoColumn">
        <div className="Introduction__Info">
          <MainTitle firstPart="Daniel" secondPart="Shliakhetko" />
          <MainCaption>Junior React Front End Developer</MainCaption>
        </div>
      </div>
      <div className="Introduction__ThumbnailColumn Centred">
        <DeveloperThumbnail />
      </div>
    </div>
  );
};
