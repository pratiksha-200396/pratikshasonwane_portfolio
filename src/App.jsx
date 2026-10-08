import React from "react";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />

      <Footer />
    </>
  );
}

export default App;