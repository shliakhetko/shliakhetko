import React from "react";
import PropTypes from "prop-types";
import SocialNetwork from "../../components/buttons/SocialNetwork/SocialNetwork";

const SocialNetworkList = (props) => {
  return (
    <ul className="SocialNetworkList">
      {props.list.map((network, i) => (
        <li key={i} className="SocialNetworkList__Item">
          <SocialNetwork
            title={network.title}
            link={network.link}
            icon={network.icon}
          />
        </li>
      ))}
    </ul>
  );
};

SocialNetworkList.propTypes = {
  list: PropTypes.array,
};

export default SocialNetworkList;
