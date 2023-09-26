import React from "react";
import Section from "../Section";
import socialNetworks from "../../data/socialNetworks";
import SocialNetworkList from "./SocialNetworkList";
import "./index.scss";

export const ContactMe = () => {
  return (
    <Section className="ContactMe">
      <SocialNetworkList list={socialNetworks} />
    </Section>
  );
};
