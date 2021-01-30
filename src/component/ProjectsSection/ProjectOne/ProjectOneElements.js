import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 50px;
  padding-top: 80px;
`;

export const ProjectContainer = styled.div`
  position: relative;
  display: grid;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-template-rows: repeat(2, 0.3fr) 2fr 0.3fr 0.3fr;
  gap: 10px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 0.1fr 0.1fr 0.5fr 0.1fr 0.1fr;
    padding-top: 50px;
    padding-right: 5px;
    padding-left: 5px;
  }
`;

export const ProjectImage = styled.div`
  grid-area: 1 / 1 / 6 / 8;
  width: 580px;
  height: 350px;
  position: relative;

  @media screen and (max-width: 600px) {
    :before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0.6) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, transparent 100%);
      z-index: 2;
    }
  }

  @media screen and (max-width: 600px) {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
    grid-area: 1 / 1 / 6 / 13;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 950px) {
    width: 100%;
    height: 100%;
  }
`;

export const ProjectLine = styled.div`
  grid-area: 1 / 8 / 2 / 13;
  color: #00ffff;
  display: flex;
  z-index: 3;
  justify-content: flex-end;
  letter-spacing: 2px;
  padding-right: 10px;

  @media screen and (max-width: 600px) {
    grid-area: 1 / 1 / 2 / 13;
    color: #fff;
    justify-content: center;
    padding-right: 0px;
  }
`;

export const ProjectTitle = styled.div`
  grid-area: 2 / 8 / 3 / 13;
  z-index: 101;
  padding-right: 10px;
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 2px;

  @media screen and (max-width: 600px) {
    grid-area: 2 / 1 / 3 / 13;
    color: #fff;
    justify-content: center;
    padding-right: 0px;
  }
`;

export const ProjectLinks = styled.div`
  grid-area: 5 / 9 / 6 / 13;
  z-index: 3;
  display: flex;
  justify-content: space-around;
  padding-right: 10px;
  color: #fff;

  @media screen and (max-width: 600px) {
    grid-area: 5 / 1 / 6 / 13;
    display: flex;
    justify-content: center;
  }
`;

export const Icons = styled.a`
  height: 25px;
  width: 25px;
  margin-left: 50px;
  color: #fff;

  &:hover:nth-child(1) {
    cursor: not-allowed;
  }

  @media screen and (max-width: 600px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const ProjectTools = styled.div`
  grid-area: 4 / 8 / 5 / 13;
  z-index: 3;
  letter-spacing: 1px;
  color: #fff;

  ul {
    list-style-type: none;
    text-align: center;
    float: right;
  }

  li {
    display: inline;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (max-width: 600px) {
    padding-right: 0px;
    color: #fff;
    grid-area: 4 / 1 / 5 / 13;

    ul {
      float: none;
    }
  }
`;

export const ProjectDesc = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  grid-area: 3 / 7 / 4 / 13;
  display: flex;
  align-items: center;
  text-align: right;
  z-index: 10;
  background: #112240;
  padding: 10px;
  color: #cecece;
  border-radius: 5px;
  margin-right: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 600px) {
    grid-area: 3 / 1 / 3 / 13;
    background: transparent;
    box-shadow: none;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
  }
`;
