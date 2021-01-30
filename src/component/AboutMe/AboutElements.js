import styled from "styled-components";

export const AboutSection = styled.section`
  height: 100vh;
`;

export const AboutContainer = styled.div`
  max-width: 800px;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-template-rows: repeat(4, 1fr);
  margin: 0 auto;
  justify-content: center;
  align-content: center;
  position: relative;
  top: 25%;
  color: #fff;
  border-top: 1px solid #777777;
  border-bottom: 1px solid #777777;
  padding: 8px;

`;

export const AboutTitle = styled.h1`
  font-size: 2rem;
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  color: #ccd6f6;
`;

export const AboutP = styled.p`
  font-size: 1.1rem;
  grid-area: 2 / 1 / 3 / 3;
  line-height: 2;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #bdc3d6;
`;

export const AboutSkillsTitle = styled.h3`
  color: #ccd6f6;
  width:280px;
`;

export const AboutSkills = styled.ul`
  grid-area: 4 / 1 / 4 / 3;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  letter-spacing: 1px;
  padding: 20px;

  li {
    list-style-type: square;
    line-height: 2;
    text-align: left;
    color: #00ffff;
  }
`;
