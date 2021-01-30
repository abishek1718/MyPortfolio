import React from "react";
import HeroSection from "../component/HeroSection";
import Projects from "../component/ProjectsSection";
import About from "../component/AboutMe";
import Footer from "../component/Footer";

const MainSection = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default MainSection;
