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
} from "./ProjectThreeElements";

import img1 from "../../../images/crypto-app.png";

const ProjectSectionThree = () => {
  return (
    <>
      <Section>
        <ProjectContainer>
          <ProjectImage>
            <Img src={img1} alt="img1"></Img>
          </ProjectImage>
          <ProjectLine>Featured Project</ProjectLine>
          <ProjectTitle>Crypto Tracker</ProjectTitle>
          <ProjectLinks>
            <Icons
              href="//github.com/abishek1718/cryptocurrency-tracker-app"
              target="_blank"
              aria-label="github"
            >
              <GithubOutline />
            </Icons>
            <Icons
              href="//sharp-brahmagupta-06bebd.netlify.app/"
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
              <li>Coingecko Api</li>
            </ul>
          </ProjectTools>
          <ProjectDesc>
          The easiest way to discover and track Bitcoin & cryptocurrency value with a simple user interface. 
          </ProjectDesc>
        </ProjectContainer>
      </Section>
    </>
  );
};

export default ProjectSectionThree;
