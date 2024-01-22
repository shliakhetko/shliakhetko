import React, { useRef, useState } from "react";
import developerImage from "./developerImage.jpg";
import developerImage1 from "./developerImage1.jpeg";
import developerImage2 from "./developerImage2.jpeg";
import "./index.scss";
import colors from "../../../data/colors";
import CurvedCircle from "../../shapes/CurvedCircle";
import ChequeredSquare from "../../shapes/ChequeredSquare";

export const DeveloperThumbnail = () => {
  const imageRef = useRef(null);

  const [imageWidth, setImageWidth] = useState(360);
  const [imageHeight, setImageHeight] = useState(480);

  const [isHover, setHover] = useState(false);
  const [hoverSwap, setHoverSwap] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
        setHoverSwap(!hoverSwap);
      }}
      style={{ width: imageWidth, height: imageHeight }}
      className="DeveloperThumbnail Centred"
    >
      <div className="DeveloperThumbnail__ImageContainer">
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
        <img
          className={
            hoverSwap
              ? "DeveloperThumbnail__Hover"
              : "DeveloperThumbnail__Hover2"
          }
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
          src={developerImage}
          alt="Developer Thumbnail"
        />
        <img
          className={
            hoverSwap
              ? "DeveloperThumbnail__Hover2"
              : "DeveloperThumbnail__Hover"
          }
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
          src={developerImage}
          alt="Developer Thumbnail"
        />
      </div>
      <div
        style={{
          width: imageWidth,
          height: imageHeight,
        }}
        className="DeveloperThumbnail__ImageShadow"
      ></div>
      <CurvedCircle
        className="DeveloperThumbnail__Decoration Hidden"
        color={colors.$hover}
      />
      <ChequeredSquare
        className="DeveloperThumbnail__Decoration Hidden"
        color={colors.$element}
      />
    </div>
  );
};
