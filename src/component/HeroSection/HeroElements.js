import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #bbb7b7;

  @media screen and (max-width: 768px) {
    height: 1150px;
  }

  @media screen and (max-width: 480px) {
    height: 750px;
  }

  @media screen and (max-width: 360px) {
    height: 750px;
  }
`;

export const HeroWrapper = styled.div`
  position: relative;
  height: 70vh;
  width: 100%;
  margin: 50px;
  border-radius: 25px;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: block;
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    height: block;
    margin: 0 auto;
  }
`;

export const HeroText = styled.div`
  position: absolute;
  max-width: 550px;
  top: 30%;
  left: 20%;

  @media screen and (max-width: 768px) {
    display: block;
    top: 10%;
    left: 15%;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    display: block;
    top: 10%;
    left: 0;
    padding: 30px;
  }
`;

export const HeroH1 = styled.h1`
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 72px;
  font-weight: 700;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 64px;
  }

  @media screen and (max-width: 480px) {
    font-size: 48px;
  }
`;

export const HeroH3 = styled.h3`
  text-transform: capitalize;
  letter-spacing: 2px;
  line-height: 1.5;
  margin-bottom: 40px;
  font-size: 1.5rem;
  color: #8d8c8c;
`;

export const HeroP = styled.p`
  text-transform: capitalize;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 50px;
  font-size: 1.2rem;
  color: #000;
`;

export const ImgWrap = styled.div`
  float: right;
  display: flex;
  flex-direction: flex-end;
  margin-top: 220px;
  margin-right: 450px;
  width: 300px;
  height: 300px;

  @media screen and (max-width: 1500px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 480px) {
    display: block;
  }
`;
