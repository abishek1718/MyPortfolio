import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;

  @media screen and (max-width: 1024px) {
    height: 800px;
  }

  @media screen and (max-width: 768px) {
    height: 700px;
  }

  @media screen and (max-width: 480px) {
    height: 650px;
  }

  @media screen and (max-width: 360px) {
    height: 820px;
  }
`;

export const HeroImg = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const HeroWrapper = styled.div`
  position: relative;
  height: 100vh;
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
  top: 16%;
  left: 25%;

  @media screen and (max-width: 1024px) {
    top: 8%;
    left: 23%;
  }

  @media screen and (max-width: 968px) {
    display: block;
    top: 10%;
    left: 15%;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    display: block;
    top: 10%;
    left: 15%;
    text-align: center;
  }

  @media screen and (max-width: 542px) {
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
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroH3 = styled.h3`
  text-transform: capitalize;
  letter-spacing: 2px;
  line-height: 1.5;
  margin-bottom: 60px;
  font-size: 1.5rem;
  color: #fff;
`;

export const HeroP = styled.p`
  text-transform: capitalize;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 60px;
  font-size: 1.2rem;
  color: #fff;
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const Button = styled.a`
  background: transparent;
  border: 2px solid #fff;
  outline: none;
  border-radius: 10px;
  font-size: 1.5rem;
  transition: 0.3s;
  color: #fff;
  width: 300px;
  height: 50px;
  display: flex;
  margin-bottom: 20px;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;

  &:hover {
    background: #1d3c72;
    color: #fff;
    transition: 0.3s all ease-in-out;
  }

  @media screen and (max-width: 968px) {
    margin: 0 auto;
    width: 200px;
    height: 50px;
    font-size: 1rem;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 600px) {
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;

export const DownloadLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  display: block;
`;
