import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;

  @media screen and (max-width: 1024px) {
    height: 800px;
  }

  @media screen and (max-width: 768px) {
    height: 700px;
  }

  @media screen and (max-width: 480px) {
    height: 500px;
  }

  @media screen and (max-width: 376px) {
    height: 600px;
  }

  @media screen and (max-width: 360px) {
    height: 450px;
  }
`;

export const HeroWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  margin: 50px;
  border-radius: 25px;

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
  padding: 10px;
  top: 18%;
  left: 25%;

  @media screen and (max-width: 1024px) {
    top: 8%;
    left: 23%;
  }

  @media screen and (max-width: 968px) {
    display: block;
    top: 10%;
    left: 15%;
    text-align: left;
  }

  @media screen and (max-width: 768px) {
    display: block;
    top: 10%;
    left: 15%;
    text-align: left;
  }

  @media screen and (max-width: 542px) {
    display: block;
    top: 10%;
    left: 15%;
    text-align: left;
  }

  @media screen and (max-width: 480px) {
    display: block;
    top: 10%;
    left: 0;
    padding: 30px;
  }

  @media screen and (max-width: 376px) {
    display: block;
    top: 20%;
    left: 0;
    padding: 30px;
  }
`;

export const HeroH1 = styled.h1`
  letter-spacing: 2px;
  font-size: 80px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #ccd6f6;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

export const HeroH4 = styled.h4`
  letter-spacing: 2px;
  font-weight: 200;
  font-size: 1.2rem;
  color: #00ffff;
`;

export const HeroH3 = styled.h3`
  letter-spacing: 2px;
  line-height: 1.5;
  margin-bottom: 60px;
  font-size: 1.3rem;
  font-weight: 200;
  color: #bdc3d6;
`;

export const HeroP = styled.p`
  text-transform: capitalize;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 60px;
  font-size: 1.2rem;
  color: #fff;
`;


export const Files = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const File = styled.a`
  text-decoration: none;
  color: #00ffff;
  border: 1.5px solid #fff;
  padding: 15px;
  border-radius: 7px;
  transition: 0.2s;
  &:hover {
    border: none;
  }

  @media screen and (max-width: 396px) {
    padding: 8px;
  }
`;

export const SocialLinkWrapper = styled.div`
  right: 100px;
  top: 30%;
  height: 300px;
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: space-evenly;

  @media screen and (max-width: 396px) {
    display: none;
  }
`;

export const SocialLinks = styled.a`
  z-index: 1;
  color: #fff;
`;
