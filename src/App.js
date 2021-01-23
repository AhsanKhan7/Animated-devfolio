import React from "react";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects.jsx";
import BottomPara from "./components/BottomPara/BottomPara";
import Contact from "./components/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <BottomPara />
      <Contact />
    </>
  );
};

export default App;
