import React from "react";
import styles from "./Landing.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  AOS.init();
  return (
    <div className={styles.landing}>
      <section className={styles.addict}>
        <p>CODING ADDICT</p>
      </section>
      <section className={styles.intro}>
        <h4>Ahsan Naseem</h4>
        <h3
          className={styles.h3Intro}
          data-aos="fade-up"
          data-aos-duration="2400"
        >
          <h3 data-aos="fade-up" data-aos-duration="1800">
            Hey, I,m <span>Ahsan</span>, Front-end react and MERN
            <br />
          </h3>
          <h3 data-aos="fade-up" data-aos-duration="2200">
            {" "}
            developer, focused on crafting polished user
            <br />
          </h3>
          <h3 data-aos="fade-up" data-aos-duration="2600">
            experiences and modern web apps.
          </h3>
        </h3>
        <h5 data-aos="fade-up" data-aos-duration="3000">
          Ahsandev.pro@gmail.com
        </h5>
      </section>
      <section className={styles.profilePic}>
        <img
          src="https://images.unsplash.com/photo-1609058745811-2e87ab15790a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
          alt="DP"
        />
      </section>
    </div>
  );
};

export default Landing;
