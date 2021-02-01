import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.scss";
import circleImg from "../../assets/circleImg.png";
import githubImg from "../../assets/github.svg";

import AOS from "aos";
import "aos/dist/aos.css";

import useWindowSize from "../useWindowSize";

import Project1_1 from "../../assets/project1_1.png";
import Project1_2 from "../../assets/project1_2.png";

import Project2_1 from "../../assets/project2_1.png";
import Project2_2 from "../../assets/project2_2.png";

import Project3_1 from "../../assets/project3_1.png";
import Project3_2 from "../../assets/project3_2.png";

import Project4_1 from "../../assets/project4_1.png";
import Project4_2 from "../../assets/project4_2.png";

import Project5_1 from "../../assets/project5_1.png";
import Project5_2 from "../../assets/project5_2.png";

const Projects = () => {
  AOS.init();

  const size = useWindowSize();

  // REF
  let app = useRef();
  let scrollContainer = useRef();

  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    // Varialbles
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    // assing skew and smooth scrolling
    if (window.innerWidth > 768) {
      scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;
    }

    requestAnimationFrame(() => skewScrolling());
  };

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerWidth < 768) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <>
      {!show ? (
        <div ref={scrollContainer} className={styles.projects}>
          <h2 className={styles.projectsHeading}>Projects</h2>

          <section>
            <div className={styles.projectDescDiv}>
              <section className={styles.projectDescDiv1}>
                <h1 className={styles.singleProjectHeading}>
                  <a
                    href="https://vigorous-franklin-94f857.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OnCart24
                  </a>
                </h1>

                <h3>PRJ CONCEPT</h3>

                <p>
                  A progressive web app of an online grocery store for
                  multi-vendors and admins. where users from different locations
                  order grocery and the nearest registered vendor deliver the
                  order.
                </p>
                <h3>TECH BEING IMPLEMENTED</h3>
                <section className={styles.techDesc}>
                  <section>
                    <ul>
                      <li>React.js</li>
                      <li>Redux</li>
                      <li>MongoDB</li>
                      <li>Mongoose</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                    </ul>
                  </section>
                  <section>
                    <ul>
                      <li>HTML5</li>
                      <li>SCSS</li>
                      <li>React-Bootstrap</li>
                      <li>JSON web Token</li>
                      <li>Axios</li>
                      <li>Paypal Integration</li>
                      <li>Payment Gateways</li>
                    </ul>
                  </section>
                </section>
                {/* <h3>
              <img src={githubImg} alt="githubLogo" /> <span>VIEW REPO</span>
            </h3> */}
              </section>
              <section className={styles.projectDescDiv2}>
                <img src={circleImg} alt="img" />
              </section>
            </div>
            <section
              // data-aos="fade-up"
              // data-aos-duration="2400"
              className={styles.imgBox}
            >
              <img src={Project1_2} alt="projectImg" />
              <img src={Project1_1} alt="projectImg" />
            </section>
          </section>

          <hr className={styles.middleLine} />

          <section>
            <div className={styles.projectDescDiv1_1}>
              <section className={styles.projectDescDiv2}>
                <img src={circleImg} alt="img" />
              </section>
              <section className={styles.projectDescDiv1}>
                <h1 className={styles.singleProjectHeading}>
                  <a
                    href="https://admirals-89f16.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Admirals Transportation
                  </a>
                </h1>

                <h3>PRJ CONCEPT</h3>
                <p>
                  A progressive web app of an online luxury car booking. where
                  the team of an admin receives bookings from different cities
                  or areas. and provide some state ofthe art cars like sedan and
                  SUV for users transportation.
                </p>
                <h3>TECH BEING IMPLEMENTED</h3>
                <section className={styles.techDesc}>
                  <section>
                    <ul>
                      <li>React.js</li>
                      <li>Redux</li>
                      <li>MongoDB</li>
                      <li>Mongoose</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                    </ul>
                  </section>
                  <section>
                    <ul>
                      <li>HTML5</li>
                      <li>SCSS</li>
                      <li>React-Bootstrap</li>
                      <li>JSON web Token</li>
                      <li>Axios</li>
                      <li>Paypal Integration</li>
                      <li>Payment Gateways</li>
                    </ul>
                  </section>
                </section>
                {/* <h3>
              <img src={githubImg} alt="githubLogo" /> <span>VIEW REPO</span>
            </h3> */}
              </section>
            </div>
            <section
              // data-aos="fade-up"
              // data-aos-duration="2400"
              className={styles.imgBox}
            >
              <img src={Project2_2} alt="projectImg" />
              <img src={Project2_1} alt="projectImg" />
            </section>
          </section>

          <hr className={styles.middleLine} />

          <section>
            <div className={styles.projectDescDiv}>
              <section className={styles.projectDescDiv1}>
                <h1 className={styles.singleProjectHeading}>
                  <a
                    href="https://proshopappahsankhan7.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ProShop
                  </a>
                </h1>

                <h3>PRJ CONCEPT</h3>
                <p>
                  A Project to create a Ecommerce products shop that includes
                  all functionality like userProfile ratings comments cart
                  checkout payment gateways and also Admin panel to see all
                  users orders make/edit or delete a product, this project also
                  show you top rated products that's rated by all users
                </p>
                <h3>TECH BEING IMPLEMENTED</h3>
                <section className={styles.techDesc}>
                  <section>
                    <ul>
                      <li>React.js</li>
                      <li>Redux</li>
                      <li>MongoDB</li>
                      <li>Mongoose</li>
                      <li>Node.js</li>
                    </ul>
                  </section>
                  <section>
                    <ul>
                      <li>Express.js</li>
                      <li>HTML5</li>
                      <li>React-Bootstrap</li>
                      <li>JSON web Token</li>
                      <li>Axios</li>
                    </ul>
                  </section>
                </section>
                <h3>
                  <img src={githubImg} alt="githubLogo" />{" "}
                  <span>
                    <a
                      href="https://github.com/AhsanKhan7/ProShop"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW REPO
                    </a>
                  </span>
                </h3>
              </section>
              <section className={styles.projectDescDiv2}>
                <img src={circleImg} alt="img" />
              </section>
            </div>
            <section
              // data-aos="fade-up"
              // data-aos-duration="2400"
              className={styles.imgBox}
            >
              <img src={Project3_1} alt="projectImg" />
              <img src={Project3_2} alt="projectImg" />
            </section>
          </section>

          <hr className={styles.middleLine} />

          <section>
            <div className={styles.projectDescDiv1_1}>
              <section className={styles.projectDescDiv2}>
                <img src={circleImg} alt="img" />
              </section>
              <section className={styles.projectDescDiv1}>
                <h1 className={styles.singleProjectHeading}>
                  <a
                    href="https://react-expensify-app-ahsan.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Expensify App
                  </a>
                </h1>

                <h3>PRJ CONCEPT</h3>
                <p>
                  A project to securely store the expenses data of a user. In
                  this app you can login by your Google account and add update
                  or delete your expenses data. By your Google account you can
                  access this at any device and get your expenses history.
                </p>
                <h3>TECH BEING IMPLEMENTED</h3>
                <section className={styles.techDesc}>
                  <section>
                    <ul>
                      <li>React.js</li>
                      <li>Redux</li>
                      <li>Firebase</li>
                    </ul>
                  </section>
                  <section>
                    <ul>
                      <li>HTML5</li>
                      <li>SCSS</li>
                      <li>React-Bootstrap</li>
                    </ul>
                  </section>
                </section>
                <h3>
                  <img src={githubImg} alt="githubLogo" />{" "}
                  <span>
                    <a
                      href="https://github.com/AhsanKhan7/expensify-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW REPO
                    </a>
                  </span>
                </h3>
              </section>
            </div>
            <section
              // data-aos="fade-up"
              // data-aos-duration="2400"
              className={styles.imgBox}
            >
              <img src={Project4_2} alt="projectImg" />
              <img src={Project4_1} alt="projectImg" />
            </section>
          </section>

          <hr className={styles.middleLine} />

          <section>
            <div className={styles.projectDescDiv}>
              <section className={styles.projectDescDiv1}>
                <h1 className={styles.singleProjectHeading}>
                  <a
                    href="https://indecision-app-2d94b.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Indecision App
                  </a>
                </h1>

                <h3>PRJ CONCEPT</h3>
                <p>
                  A Unique type of todo app. when you enter multiple tasks and
                  click on "What Should I Do" it will return you a random task
                  to do from the tasks you entered
                </p>
                <h3>TECH BEING IMPLEMENTED</h3>
                <section className={styles.techDesc}>
                  <section>
                    <ul>
                      <li>React.js</li>
                      <li>Redux</li>
                      <li>JSON storage</li>
                    </ul>
                  </section>
                  <section>
                    <ul>
                      <li>HTML5</li>
                      <li>React-Bootstrap</li>
                      <li>SCSS</li>
                    </ul>
                  </section>
                </section>
                <h3>
                  <img src={githubImg} alt="githubLogo" />{" "}
                  <span>
                    <a
                      href="https://github.com/AhsanKhan7/Indecision-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW REPO
                    </a>
                  </span>
                </h3>
              </section>
              <section className={styles.projectDescDiv2}>
                <img src={circleImg} alt="img" />
              </section>
            </div>
            <section
              // data-aos="fade-up"
              // data-aos-duration="2400"
              className={styles.imgBox}
            >
              <img src={Project5_2} alt="projectImg" />
              <img src={Project5_1} alt="projectImg" />
            </section>
          </section>

          <h2>
            {" "}
            <a
              href="https://github.com/AhsanKhan7"
              target="_blank"
              rel="noopener noreferrer"
            >
              More Projects on Github
            </a>{" "}
          </h2>
          <hr className={styles.middleLine} />
        </div>
      ) : (
        <div className={styles.projects}>
          <h2 className={styles.projectsHeading}>Projects</h2>

          <section>
            <div className={styles.projectDescDiv}>
              <section className={styles.projectDescDiv1}>
                <h1 className={styles.singleProjectHeading}>
                  <a
                    href="https://vigorous-franklin-94f857.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OnCart24
                  </a>
                </h1>

                <h3>PRJ CONCEPT</h3>

                <p>
                  A progressive web app of an online grocery store for
                  multi-vendors and admins. where users from different locations
                  order grocery and the nearest registered vendor deliver the
                  order.
                </p>
                <h3>TECH BEING IMPLEMENTED</h3>
                <section className={styles.techDesc}>
                  <section>
                    <ul>
                      <li>React.js</li>
                      <li>Redux</li>
                      <li>MongoDB</li>
                      <li>Mongoose</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                    </ul>
                  </section>
                  <section>
                    <ul>
                      <li>HTML5</li>
                      <li>SCSS</li>
                      <li>React-Bootstrap</li>
                      <li>JSON web Token</li>
                      <li>Axios</li>
                      <li>Paypal Integration</li>
                      <li>Payment Gateways</li>
                    </ul>
                  </section>
                </section>
              </section>
              <section className={styles.projectDescDiv2}>
                <img src={circleImg} alt="img" />
              </section>
            </div>
            <section className={styles.imgBox}>
              <img src={Project1_2} alt="projectImg" />
              <img src={Project1_1} alt="projectImg" />
            </section>
          </section>

          <hr className={styles.middleLine} />

          <section>
            <div className={styles.projectDescDiv1_1}>
              <section className={styles.projectDescDiv2}>
                <img src={circleImg} alt="img" />
              </section>
              <section className={styles.projectDescDiv1}>
                <h1 className={styles.singleProjectHeading}>
                  <a
                    href="https://admirals-89f16.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Admirals Transportation
                  </a>
                </h1>

                <h3>PRJ CONCEPT</h3>
                <p>
                  A progressive web app of an online luxury car booking. where
                  the team of an admin receives bookings from different cities
                  or areas. and provide some state ofthe art cars like sedan and
                  SUV for users transportation.
                </p>
                <h3>TECH BEING IMPLEMENTED</h3>
                <section className={styles.techDesc}>
                  <section>
                    <ul>
                      <li>React.js</li>
                      <li>Redux</li>
                      <li>MongoDB</li>
                      <li>Mongoose</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                    </ul>
                  </section>
                  <section>
                    <ul>
                      <li>HTML5</li>
                      <li>SCSS</li>
                      <li>React-Bootstrap</li>
                      <li>JSON web Token</li>
                      <li>Axios</li>
                      <li>Paypal Integration</li>
                      <li>Payment Gateways</li>
                    </ul>
                  </section>
                </section>
              </section>
            </div>
            <section
              data-aos="fade-up"
              data-aos-duration="2400"
              className={styles.imgBox}
            >
              <img src={Project2_2} alt="projectImg" />
              <img src={Project2_1} alt="projectImg" />
            </section>
          </section>

          <hr className={styles.middleLine} />

          <section>
            <div className={styles.projectDescDiv}>
              <section className={styles.projectDescDiv1}>
                <h1 className={styles.singleProjectHeading}>
                  <a
                    href="https://proshopappahsankhan7.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ProShop
                  </a>
                </h1>

                <h3>PRJ CONCEPT</h3>
                <p>
                  A Project to create a Ecommerce products shop that includes
                  all functionality like userProfile ratings comments cart
                  checkout payment gateways and also Admin panel to see all
                  users orders make/edit or delete a product, this project also
                  show you top rated products that's rated by all users
                </p>
                <h3>TECH BEING IMPLEMENTED</h3>
                <section className={styles.techDesc}>
                  <section>
                    <ul>
                      <li>React.js</li>
                      <li>Redux</li>
                      <li>MongoDB</li>
                      <li>Mongoose</li>
                      <li>Node.js</li>
                    </ul>
                  </section>
                  <section>
                    <ul>
                      <li>Express.js</li>
                      <li>HTML5</li>
                      <li>React-Bootstrap</li>
                      <li>JSON web Token</li>
                      <li>Axios</li>
                    </ul>
                  </section>
                </section>
                <h3>
                  <img src={githubImg} alt="githubLogo" />{" "}
                  <span>
                    <a
                      href="https://github.com/AhsanKhan7/ProShop"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW REPO
                    </a>
                  </span>
                </h3>
              </section>
              <section className={styles.projectDescDiv2}>
                <img src={circleImg} alt="img" />
              </section>
            </div>
            <section
              data-aos="fade-up"
              data-aos-duration="2400"
              className={styles.imgBox}
            >
              <img src={Project3_1} alt="projectImg" />
              <img src={Project3_2} alt="projectImg" />
            </section>
          </section>

          <hr className={styles.middleLine} />

          <section>
            <div className={styles.projectDescDiv1_1}>
              <section className={styles.projectDescDiv2}>
                <img src={circleImg} alt="img" />
              </section>
              <section className={styles.projectDescDiv1}>
                <h1 className={styles.singleProjectHeading}>
                  <a
                    href="https://react-expensify-app-ahsan.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Expensify App
                  </a>
                </h1>

                <h3>PRJ CONCEPT</h3>
                <p>
                  A project to securely store the expenses data of a user. In
                  this app you can login by your Google account and add update
                  or delete your expenses data. By your Google account you can
                  access this at any device and get your expenses history.
                </p>
                <h3>TECH BEING IMPLEMENTED</h3>
                <section className={styles.techDesc}>
                  <section>
                    <ul>
                      <li>React.js</li>
                      <li>Redux</li>
                      <li>Firebase</li>
                    </ul>
                  </section>
                  <section>
                    <ul>
                      <li>HTML5</li>
                      <li>SCSS</li>
                      <li>React-Bootstrap</li>
                    </ul>
                  </section>
                </section>
                <h3>
                  <img src={githubImg} alt="githubLogo" />{" "}
                  <span>
                    <a
                      href="https://github.com/AhsanKhan7/expensify-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW REPO
                    </a>
                  </span>
                </h3>
              </section>
            </div>
            <section
              data-aos="fade-up"
              data-aos-duration="2400"
              className={styles.imgBox}
            >
              <img src={Project4_2} alt="projectImg" />
              <img src={Project4_1} alt="projectImg" />
            </section>
          </section>

          <hr className={styles.middleLine} />

          <section>
            <div className={styles.projectDescDiv}>
              <section className={styles.projectDescDiv1}>
                <h1 className={styles.singleProjectHeading}>
                  <a
                    href="https://indecision-app-2d94b.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Indecision App
                  </a>
                </h1>

                <h3>PRJ CONCEPT</h3>
                <p>
                  A Unique type of todo app. when you enter multiple tasks and
                  click on "What Should I Do" it will return you a random task
                  to do from the tasks you entered
                </p>
                <h3>TECH BEING IMPLEMENTED</h3>
                <section className={styles.techDesc}>
                  <section>
                    <ul>
                      <li>React.js</li>
                      <li>Redux</li>
                      <li>JSON storage</li>
                    </ul>
                  </section>
                  <section>
                    <ul>
                      <li>HTML5</li>
                      <li>React-Bootstrap</li>
                      <li>SCSS</li>
                    </ul>
                  </section>
                </section>
                <h3>
                  <img src={githubImg} alt="githubLogo" />{" "}
                  <span>
                    <a
                      href="https://github.com/AhsanKhan7/Indecision-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW REPO
                    </a>
                  </span>
                </h3>
              </section>
              <section className={styles.projectDescDiv2}>
                <img src={circleImg} alt="img" />
              </section>
            </div>
            <section
              data-aos="fade-up"
              data-aos-duration="2400"
              className={styles.imgBox}
            >
              <img src={Project5_2} alt="projectImg" />
              <img src={Project5_1} alt="projectImg" />
            </section>
          </section>

          <h2>
            {" "}
            <a
              href="https://github.com/AhsanKhan7"
              target="_blank"
              rel="noopener noreferrer"
            >
              More Projects on Github
            </a>{" "}
          </h2>
          <hr className={styles.middleLine} />
        </div>
      )}
    </>
  );
};

export default Projects;
