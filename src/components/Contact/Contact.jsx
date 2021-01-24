import React from "react";
import styles from "./Contact.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  AOS.init();

  const coat = `{ Imagination is important than knowledge }`;

  return (
    <>
      <section className={styles.contact}>
        <section className={styles.section1}>
          <h2>
            <span data-aos="fade-up" data-aos-duration="1400">
              That's enough of me,
            </span>
            <br />
            <span data-aos="fade-up" data-aos-duration="2400">
              Let's talk about you.
            </span>
          </h2>
        </section>
        <section>
          <section className={styles.section2}>
            {/* <>
            <marquee style={{ color: "white", width: "40px" }}>Social</marquee>
          </> */}
            <section className={styles.links}>
              <h5>Linkedin</h5>
            </section>
            <section className={styles.links}>
              <h5>Twitter</h5>
            </section>
            <section className={styles.links}>
              <h5>Facebook</h5>
            </section>
          </section>
          <section className={styles.section2_1}>
            <h5>Ahsandev.pro@gmail.com</h5>
          </section>
        </section>
      </section>
      <section className={styles.coat}>{coat}</section>
    </>
  );
};

export default Contact;
