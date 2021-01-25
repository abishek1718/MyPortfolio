import React from "react";
import {
  AboutSection,
  AboutContainer,
  AboutTitle,
  AboutP,
  AboutSkills,
  AboutSkillsTitle,
} from "./AboutElements";

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutTitle>About Me</AboutTitle>
        <AboutP>
          Hello! I'm Abishek. Nice to meet you.<br></br>A Web Developer based in
          Columbus, OH. I enjoy sitting in front of my laptop for long hours,
          That's how I became a Web Developer. My goal is to build things that
          make sense,
          <br></br>
        </AboutP>
        <AboutSkillsTitle> Languages I Speak:</AboutSkillsTitle>
        <AboutSkills>
          <ul>
            <li>HTML</li>
            <li>(S)CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <li>WordPress</li>
            <li>Node.js</li>
            <li>Figma</li>
          </ul>
        </AboutSkills>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
