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
          Hello! I'm Abishek. Nice to meet you.<br></br> A Web Developer based
          in Columbus, OH. I'll be graduating from Franklin University with a
          Bachelors in Web Development this may. My goal is to show my Web
          Development skills in a respective company & build things that make
          sense and provide meaningful solutions.
          <br></br>
        </AboutP>
        <AboutSkillsTitle> Languages, Libraries & Tools</AboutSkillsTitle>
        <AboutSkills>
          <ul>
            <li>HTML</li>
            <li>(S)CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <li>React JS</li>
            <li>Node JS</li>
            <li>Bootstrap</li>
          </ul>
          <ul>
            <li>Git & Github</li>
            <li>Command line</li>
            <li>InDesign</li>
          </ul>
        </AboutSkills>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
