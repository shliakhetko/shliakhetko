import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ChequeredSquare = (props) => {
  const { className, style, color } = props;
  
  return (
    <svg
      style={style}
      className={classNames(className, "Shape")}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      fill="none"
      viewBox="0 0 200 200"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnsSvgjs="http://svgjs.dev/svgjs"
    >
      <path
        fill={color || "#FFFFFF"}
        fill-rule="evenodd"
        d="M0 0h50v50H0V0Zm100 50H50v50H0v50h50v50h50v-50h50v50h50v-50h-50v-50h50V50h-50V0h-50v50Zm0 50h50V50h-50v50Zm0 0v50H50v-50h50Z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

ChequeredSquare.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
};

export default ChequeredSquare;
