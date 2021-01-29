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
              <h5>
                <a
                  href="https://www.linkedin.com/in/ahsan-naseem-4906371ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </h5>
            </section>
            <section className={styles.links}>
              <h5>
                <a
                  href="https://twitter.com/Ahsan14595099"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </h5>
            </section>
            <section className={styles.links}>
              <h5>
                <a
                  href="https://www.facebook.com/profile.php?id=100004555336801"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </h5>
            </section>
          </section>
          <section className={styles.section2_1}>
            <h5>
              {" "}
              <a href="mailto:ahsandev.pro@gmail.com">Ahsandev.pro@gmail.com</a>
            </h5>
          </section>
        </section>
      </section>
      <section className={styles.coat}>{coat}</section>
    </>
  );
};

export default Contact;
