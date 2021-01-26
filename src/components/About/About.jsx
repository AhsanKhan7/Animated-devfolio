import React, { useState, useEffect } from "react";
import styles from "./About.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init();

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerWidth > 768 && window.scrollY > 720) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };

    // window.addEventListener("scroll", () => {
    //   if (window.innerWidth < 768 && window.scrollY > 410) {
    //     handleShow(true);
    //   } else handleShow(false);
    // });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={show ? styles.about_dark : styles.about}>
      <section
        data-aos="fade-up"
        data-aos-duration="1500"
        className={styles.section1}
      >
        <p>
          I create projects under the notion that <span>"less is more"</span>{" "}
          and my work reflects my addiction for minimal and clean design and
          code as well as my desire to push boundaries.
        </p>
      </section>
      {/* <section data-aos="fade-up" data-aos-duration="1500" className={styles.section2}><p>I am currently learning Node and deno to further my <span>full-stack</span> focus while developing my concept of Honne into a <span>Prograssive web app</span> using React.</p></section> */}
      <section
        data-aos="fade-up"
        data-aos-duration="1500"
        className={styles.section3}
      >
        <p>
          My aim is to take coding into the professional dimension where I hope
          to bring <span>value</span> and continously grow myself.
        </p>
      </section>
    </div>
  );
};

export default About;
