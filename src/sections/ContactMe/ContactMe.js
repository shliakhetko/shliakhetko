import React from "react";
import Section from "../Section";
import socialNetworks from "../../data/socialNetworks";
import SocialNetworkList from "./SocialNetworkList";
import "./index.scss";
import SectionTitle from "../../components/titles/SectionTitle/SectionTitle";
import { MainCaption } from "../../components/paragraphs/MainCaption/MainCaption";
import { SnakeGame } from "../SnakeGame/SnakeGame";
import Fylfot from "../../components/shapes/Fylfot";
import colors from "../../data/colors";
import OctagonalCloud from "../../components/shapes/OctagonalCloud";

export const ContactMe = () => {
  return (
    <Section className="ContactMe" id="contacts" isRow={true}>
      <div className="ContactMe__InfoColumn">
        <MainCaption>What are you waiting for!?</MainCaption>
        <SectionTitle additional={"Me"}>Contact </SectionTitle>
        <SocialNetworkList list={socialNetworks} />
      </div>
      <div className="ContactMe__GameColumn">
        <SnakeGame height={225} width={225} />
      </div>
      <a href="#" className="ContactMeToTop Hidden">
        <div className="ContactMeToTop__Arrow">⯅</div>
        <OctagonalCloud
          className="ContactMeToTop__Circle Rotatable"
          color={colors.$hover}
        />
      </a>
    </Section>
  );
};
