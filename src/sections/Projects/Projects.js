import React, { useEffect, useState } from "react";
import Section from "../Section";
import SectionTitle from "../../components/titles/SectionTitle/SectionTitle";
import ProjectList from "../../components/lists/ProjectList/ProjectList";
import { getRepositories } from "../../github/githubGet";
import { getInfoFromRepositories } from "../../data/projects";
import "./index.scss";

export const Projects = () => {
  const [repositories, setRepositories] = useState(null);

  useEffect(() => {
    if (repositories) return;
    getRepositories()
      .then((res) => {
        const repos = getInfoFromRepositories(res.data);
        setRepositories(repos);
        console.log(repos);
      })
      .catch((err) => {
        console.warn("Something went wrong during getting repositories");
      });
  }, [repositories]);

  return (
    <Section className="Projects">
      <SectionTitle textAlign="Center">Projects</SectionTitle>
      <ProjectList list={repositories} max={3} />
    </Section>
  );
};
