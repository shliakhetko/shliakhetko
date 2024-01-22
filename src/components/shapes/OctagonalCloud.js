import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const OctagonalCloud = (props) => {
  const { className, style, color } = props;

  return (
    <svg
      style={style}
      className={classNames(className, "Shape")}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      fill="none"
      viewBox="0 0 54 54"
    >
      <path
        fill='url("#SvgjsLinearGradient1036")'
        d="M48 18c1.9-8.5-4.2-14.2-12.9-11.8-4.8-7.7-13-7.7-17.5-.2C9.1 4.2 3.5 10.2 5.8 18.8c-7.6 4.7-7.6 12.9-.2 17.4C3.7 44.7 9.8 50.4 18.5 48c4.8 7.7 13 7.7 17.5.2C44.5 50 50.1 44 47.8 35.4c7.6-4.7 7.5-12.9.2-17.4Z"
      ></path>
      <defs>
        <linearGradient id="SvgjsLinearGradient1036">
          <stop stop-color={color || "#FFFFFF"} offset="0"></stop>
          <stop stop-color={color || "#FFFFFF"} offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

OctagonalCloud.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
};

export default OctagonalCloud;
