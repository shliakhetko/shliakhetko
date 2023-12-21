import React from "react";
import Section from "../Section";
import socialNetworks from "../../data/socialNetworks";
import SocialNetworkList from "./SocialNetworkList";
import "./index.scss";
import SectionTitle from "../../components/titles/SectionTitle/SectionTitle";
import { MainCaption } from "../../components/paragraphs/MainCaption/MainCaption";

export const ContactMe = () => {
  return (
    <Section className="ContactMe">
        <MainCaption>What are you waiting for!?</MainCaption>
        <SectionTitle additional={"Me!"}>Contact </SectionTitle>
        <SocialNetworkList list={socialNetworks} />
    </Section>
  );
};
