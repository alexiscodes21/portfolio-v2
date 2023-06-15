import React from "react";
import "./App.css";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSecton from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSecton />
      <Footer />
    </div>
  );
}

export default App;
