import React from "react";
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
  Title,
} from "./ProjectOneElements";

import img1 from "../../../images/test2.png";

const ProjectSectionOne = () => {
  return (
    <>
      <Section>
        <Title>Projects</Title>
        <ProjectContainer>
          <ProjectImage>
            <Img src={img1} alt="img1"></Img>
          </ProjectImage>
          <ProjectLine>Featured Project</ProjectLine>
          <ProjectTitle>Fair Lanka</ProjectTitle>
          <ProjectLinks>
            <Icons
              href="//fairlanka.info"
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
              <li>React JS</li>
            </ul>
          </ProjectTools>
          <ProjectDesc>
            A brief showcase of all the products sell on store, You can check
            out services, Time of operation & Wholesale & Retail Market
          </ProjectDesc>
        </ProjectContainer>
      </Section>
    </>
  );
};

export default ProjectSectionOne;
