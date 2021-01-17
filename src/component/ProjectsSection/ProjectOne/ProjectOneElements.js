import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
`;

export const ProjectContainer = styled.div`
  display: grid;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-template-rows: repeat(2, 0.5fr) 1.5fr 0.5fr 0.3fr;
  gap: 10px;
  border: 2px solid #000;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    padding-top: 100px;
    padding-right: 5px;
    padding-left: 5px;
  }

  /* .grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 0.5fr) 1.5fr 0.5fr 0.3fr;
  gap: 0px 0px;
}

.ProjectImage { grid-area: 1 / 6 / 6 / 13; }

.ProjectLine { grid-area: 1 / 1 / 2 / 6; }

.ProjectTitle { grid-area: 2 / 1 / 3 / 6; }

.ProjectLinks { grid-area: 5 / 1 / 6 / 6; }

.ProjectTools { grid-area: 4 / 1 / 5 / 6; }

.ProjectDesc { grid-area: 3 / 1 / 4 / 6; } */
`;

export const ProjectImage = styled.div`
  grid-area: 1 / 1 / 6 / 8;
  width: 580px;
  height: 350px;

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
  opacity: 0.3;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 950px) {
    width: 100%;
    height: 100%;
  }
`;

export const ProjectLine = styled.div`
  grid-area: 1 / 8 / 2 / 13;
  color: #000;
  display: flex;
  z-index: 3;
  justify-content: flex-end;
  text-align: right;
  padding-right: 10px;
`;

export const ProjectTitle = styled.div`
  grid-area: 2 / 8 / 3 / 13;
  z-index: 101;
  padding-right: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const ProjectLinks = styled.div`
  grid-area: 5 / 8 / 6 / 13;
  z-index: 3;

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
`;

export const ProjectTools = styled.div`
  grid-area: 4 / 8 / 5 / 13;
  z-index: 3;

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
  }
`;

export const ProjectDesc = styled.div`
  font-size: 1.1rem;
  grid-area: 3 / 7 / 4 / 13;
  display: flex;
  align-items: center;
  text-align: right;
  z-index: 10;
  background: #000;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 600px) {
    grid-area: 3 / 7 / 4 / 13;
    background: transparent;
    box-shadow: none;
    color: #000;
  }
`;
