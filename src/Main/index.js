import React from "react";
import HeroSection from "../component/HeroSection";
import Projects from "../component/ProjectsSection";
import About from "../component/AboutMe";


const MainSection = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
    </>
  );
};

export default MainSection;
