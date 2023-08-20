import React from "react";
import "./index.scss";
import SectionTitle from "../../components/titles/SectionTitle/SectionTitle";
import { Description } from "../../components/paragraphs/Description/Description";
import Skills from "../../components/lists/Skills/Skills";
import skills from "../../data/skills";
import Section from "../Section";

export const AboutMe = () => {
  return (
    <Section className="AboutMe" isRow={true}>
      <div className="AboutMe__InfoColumn">
        <SectionTitle additional="Me">About </SectionTitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Description>
      </div>
      <div className="AboutMe__SkillsColumn">
        <Skills list={skills}/>
      </div>
    </Section>
  );
};
