import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const SocialNetwork = (props) => {
  const Icon = props.icon;
  return <a className="SocialNetwork" href={props.link} title={props.title} target="_blank" rel="noreferrer"><Icon/></a>;
};

SocialNetwork.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.object,
};

export default SocialNetwork;
