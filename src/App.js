import React, { useState, useEffect } from "react";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects.jsx";
import BottomPara from "./components/BottomPara/BottomPara";
import Contact from "./components/Contact/Contact";
import "./App.css";

import Lottie from "react-lottie";
import animationData from "./assets/trans1.json";

const App = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [show, setShow] = useState();

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1170);
  }, [show]);

  return (
    <>
      <section className={show ? "anim" : "anim2"}>
        <Lottie options={defaultOptions} />
      </section>
      {show && (
        <>
          <Landing />
          <About />
          <section style={{ backgroundColor: "black" }}>
            <Projects />
            <BottomPara />
            <Contact />
          </section>
        </>
      )}
    </>
  );
};

export default App;
