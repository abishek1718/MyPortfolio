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
} from "./ProjectTwoElements";

import img1 from "../../../images/test2.png";

const ProjectSectionTwo = () => {
  return (
    <>
      <Section>
        <ProjectContainer>
          <ProjectImage>
            <Img src={img1} alt="img1"></Img>
          </ProjectImage>
          <ProjectLine>Featured Project</ProjectLine>
          <ProjectTitle>Company Homepage</ProjectTitle>
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

export default ProjectSectionTwo;
