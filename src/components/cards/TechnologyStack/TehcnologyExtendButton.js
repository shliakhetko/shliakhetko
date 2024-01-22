import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const TehcnologyExtendButton = (props) => {
  return (
    <li className={classNames("TehcnologyExtendButton",props.className)} onClick={props.onClick}>
      <div className="TehcnologyExtendButton__Wrapper">
        <div className="TehcnologyExtendButton__Content">
            <span className="TehcnologyExtendButton__Text">More</span>
        </div>
        <div className="TehcnologyExtendButton__BackContent">
            <span className="TehcnologyExtendButton__Text">Less</span>
        </div>
      </div>
    </li>
  );
};

TehcnologyExtendButton.propTypes = {
  onClick: PropTypes.func,
};

export default TehcnologyExtendButton;
