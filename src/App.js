import React from "react";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects.jsx";
import BottomPara from "./components/BottomPara/BottomPara";
import "./App.css";

const App = () => {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <BottomPara />
    </>
  );
};

export default App;
