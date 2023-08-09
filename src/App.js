import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
// import ProjectsSection2 from "./components/ProjectsSection2";
import ContactSecton from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Alexis Winters";
  }, []);
  
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ProjectsSection2 /> */}
      <ContactSecton />
      <Footer />
    </div>
  );
}

export default App;
