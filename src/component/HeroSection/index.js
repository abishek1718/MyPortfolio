import React from "react";
import { Download } from "@styled-icons/boxicons-regular/Download";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import img1 from "../../images/bg-2.jpg";

import {
  HeroContainer,
  HeroWrapper,
  HeroH1,
  HeroH3,
  HeroP,
  HeroText,
  Button,
  DownloadLinks,
  HeroImg,
  Img
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroImg>
        <Img src={img1} alt="img1"></Img>
      </HeroImg>
      <HeroWrapper>
        <HeroText>
          <HeroH1>Hi, my name is Abishek Kanageswaran (Abi)</HeroH1>
          <HeroP>a front end developer & UI Designer in Ohio. </HeroP>
          <HeroH3>
            I specialize in front end development, responsive web design, and
            visual development
          </HeroH3>
          <DownloadLinks>
            <Button>
              Download Resume
              <Download size="35" title="download" />
            </Button>
            <Button
              href="//mailto:abishekkanageswaran70@gmail.com"
              target="_blank"
              aria-label="gmail"
            >
              Get In touch
              <EmailOutline size="35" title="Email" />
            </Button>
          </DownloadLinks>
        </HeroText>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
