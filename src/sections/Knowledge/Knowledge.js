import React from "react";
import SectionTitle from "../../components/titles/SectionTitle/SectionTitle";
import TechnologyStack from "../../components/cards/TechnologyStack/TechnologyStack";
import technologies from "../../data/technologies";
import "./index.scss";
import Section from "../Section";

export const Knowledge = () => {
  return (
    <Section className="Knowledge" id="technologies">
      <SectionTitle textAlign="Center" additional="Stack">
        Technology{" "}
      </SectionTitle>
      <TechnologyStack cards={technologies} max={8}/>
    </Section>
  );
};
