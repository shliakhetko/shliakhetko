import React from "react";
import "./index.scss";
import SectionTitle from "../../components/titles/SectionTitle/SectionTitle";
import { Description } from "../../components/paragraphs/Description/Description";
import Skills from "../../components/lists/Skills/Skills";
import skills from "../../data/skills";
import Section from "../Section";

export const AboutMe = () => {
  return (
    <Section className="AboutMe" id="about" isRow={true}>
      <div className="AboutMe__InfoColumn">
        <SectionTitle additional="Me">About </SectionTitle>
        <Description>
          <b>Experience:</b> I am junior frontend developer, the one you definitely need. I have
          been learning Front-end technologies for 2 years straight. During this time I’ve
          worked on 10+ Projects.
          <br />
          <b>Knowledge:</b> I study Computer Science “Artificial Intelligence” at National
          University Lviv Polytechnic, at the same time, I am improving my professional and development skills.
          <br />
          <b>Personality:</b> I am polite and friendly person, who will be glad to meet new
          people. My best personal qualities are resonsibility, as well as
          adaptability. I am patient and diligent person with big ambitions,
          always ready for hard work and new challenges.
        </Description>
      </div>
      <div className="AboutMe__SkillsColumn">
        <Skills list={skills} />
      </div>
    </Section>
  );
};
