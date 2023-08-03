import React, { useRef, useState } from "react";
import developerImage from "./developerImage.jpg";
import "./index.scss";
import colors from "../../../data/colors";
import CurvedCircle from "../../shapes/CurvedCircle";
import ChequeredSquare from "../../shapes/ChequeredSquare";

export const DeveloperThumbnail = () => {
  const imageRef = useRef(null);

  const [imageWidth, setImageWidth] = useState(360);
  const [imageHeight, setImageHeight] = useState(480);

  return (
    <div
      style={{ width: imageWidth, height: imageHeight }}
      className="DeveloperThumbnail Centred"
    >
      <img
        ref={imageRef}
        className="DeveloperThumbnail__Image"
        onLoad={() => {
          setImageWidth(imageRef.current.clientWidth);
          setImageHeight(imageRef.current.clientHeight);
        }}
        src={developerImage}
        alt="Developer Thumbnail"
      />
      <div
        style={{
          width: imageWidth,
          height: imageHeight,
        }}
        className="DeveloperThumbnail__ImageShadow"
      ></div>
      <CurvedCircle
        className="DeveloperThumbnail__Decoration"
        color={colors.$hover}
      />
      <ChequeredSquare
        className="DeveloperThumbnail__Decoration"
        color={colors.$element}
      />
    </div>
  );
};
