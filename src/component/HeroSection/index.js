import React from "react";
import img1 from "../../images/test.png";
import {
  HeroContainer,
  HeroWrapper,
  HeroH1,
  HeroH3,
  HeroP,
  HeroText,
  Img,
  ImgWrap,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroText>
          <HeroH1>Hi, I'm Ababcde,</HeroH1>
          <HeroP>a front end developer & UI Designer in Ohio. </HeroP>
          <HeroH3>
            I specialize in front end development, responsive web design, and
            visual development
          </HeroH3>
          <HeroP>
            I don't just build websites, I build websites that{" "}
            <strong>SELLS</strong>
          </HeroP>
        </HeroText>
        <ImgWrap>
          <Img src={img1} alt="Main Image" />
        </ImgWrap>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
