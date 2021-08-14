import React from "react";
import myPDF from "../../assets/Resume.pdf";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Email } from "@styled-icons/entypo/Email";
import { DocumentDownload } from "@styled-icons/heroicons-outline/DocumentDownload";

import {
  HeroContainer,
  HeroWrapper,
  HeroH1,
  HeroH3,
  HeroH4,
  HeroText,
  Files,
  File,
  SocialLinkWrapper,
  SocialLinks,
} from "./HeroElements";
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroText>
          <HeroH4>Hi, my name is</HeroH4>
          <HeroH1>Abishek Kanageswaran.</HeroH1>
          <HeroH3>
            I specialize in front-end development, responsive web design, and
            visual development.
          </HeroH3>
          <Files>
            <File href={myPDF} target="_blank" rel="noreferrer">
              Download Resume
            </File>
            <File
              href="mailto:abishekkanageswaran70@gmail.com"
              target="_blank"
              aria-label="gmail"
              rel="noreferrer"
            >
              Get in touch
            </File>
          </Files>
        </HeroText>
      </HeroWrapper>
      <SocialLinkWrapper className="footer-btm">
        <SocialLinks
          href="//www.linkedin.com/in/abishekkanageswaran/"
          target="_blank"
          aria-label="github"
          rel="noreferrer"
        >
          <Linkedin size="25" />
        </SocialLinks>
        <SocialLinks
          href="//github.com/abishek1718"
          target="_blank"
          aria-label="github"
          rel="noreferrer"
        >
          <GithubOutline size="25" />
        </SocialLinks>
        <SocialLinks
          href="mailto:abishekkanageswaran70@gmail.com"
          target="_blank"
          aria-label="gmail"
          rel="noreferrer"
        >
          <Email size="25" />
        </SocialLinks>
        <SocialLinks href={myPDF} target="_blank" rel="noreferrer">
          <DocumentDownload size="27" />
        </SocialLinks>
      </SocialLinkWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
