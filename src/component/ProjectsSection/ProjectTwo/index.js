import React from "react";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { ExternalLink } from "@styled-icons/evaicons-solid/ExternalLink";

import {
  ProjectContainer,
  ProjectImage,
  ProjectLine,
  ProjectTitle,
  ProjectLinks,
  ProjectTools,
  ProjectDesc,
  Section,
  Img,
  Icons,
} from "./ProjectTwoElements";

import img1 from "../../../images/movie-app.png";

const ProjectSectionTwo = () => {
  return (
    <>
      <Section>
        <ProjectContainer>
          <ProjectImage>
            <Img src={img1} alt="img1"></Img>
          </ProjectImage>
          <ProjectLine>Featured Project</ProjectLine>
          <ProjectTitle>Movie App - Database</ProjectTitle>
          <ProjectLinks>
            <Icons
              href="//github.com/abishek1718/50-HTML-CSS-JS-Mini-Projects/tree/master/Project%2017"
              target="_blank"
              aria-label="github"
            >
              <GithubOutline />
            </Icons>
            <Icons
              href="//zen-einstein-67ea59.netlify.app"
              target="_blank"
              aria-label="fairlanka"
            >
              <ExternalLink />
            </Icons>
          </ProjectLinks>
          <ProjectTools>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>IMDb API</li>
            </ul>
          </ProjectTools>
          <ProjectDesc>
            An app for Movie Database, Displaying Recent Movies, Movie Overview
            & Rating, Search for any of your favorite movies.
          </ProjectDesc>
        </ProjectContainer>
      </Section>
    </>
  );
};

export default ProjectSectionTwo;
