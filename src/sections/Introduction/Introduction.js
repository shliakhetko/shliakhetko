import React from "react";
import MainTitle from "../../components/titles/MainTitle/MainTitle";
import { MainCaption } from "../../components/paragraphs/MainCaption/MainCaption";
import { DeveloperThumbnail } from "../../components/thumbnails/DeveloperThumbnail/DeveloperThumbnail";
import "./index.scss";
import Section from "../Section";

export const Introduction = () => {
  return (
    <Section className="Introduction" isRow={true}>
      <div className="Introduction__InfoColumn">
        <div className="Introduction__Info">
          <MainTitle firstPart="Daniel" secondPart="Shliakhetko" />
          <MainCaption>Junior React Front-end Developer</MainCaption>
        </div>
      </div>
      <div className="Introduction__ThumbnailColumn Centred">
        <DeveloperThumbnail />
      </div>
    </Section>
  );
};
