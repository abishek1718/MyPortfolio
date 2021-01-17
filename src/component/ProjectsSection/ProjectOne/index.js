import React from "react";
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
} from "./ProjectOneElements";

import img1 from "../../../images/test2.png";

const ProjectSectionOne = () => {
  return (
    <>
      <Section>
        <ProjectContainer>
          <ProjectImage>
            <Img src={img1} alt="img1"></Img>
          </ProjectImage>
          <ProjectLine>Featured Project</ProjectLine>
          <ProjectTitle>Fair Lanka</ProjectTitle>
          <ProjectLinks>
            <ul>
              <li>twitter</li>
              <li>facebook</li>
            </ul>
          </ProjectLinks>
          <ProjectTools>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
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
