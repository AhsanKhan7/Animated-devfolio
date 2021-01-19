import React from "react";
import styles from "./Projects.module.scss";
import circleImg from "../../assets/circleImg.png";
import githubImg from "../../assets/github.svg";

import AOS from "aos";
import "aos/dist/aos.css";

import Project1_1 from "../../assets/project1_1.png";
import Project1_2 from "../../assets/project1_2.png";
import Project2_1 from "../../assets/project2_1.png";
import Project2_2 from "../../assets/project2_2.png";
import Project3_1 from "../../assets/project3_1.png";
import Project3_2 from "../../assets/project3_2.png";

const Projects = () => {
  AOS.init();
  return (
    <div className={styles.projects}>
      <h2 className={styles.projectsHeading}>Projects</h2>

      <section>
        <div className={styles.projectDescDiv}>
          <section className={styles.projectDescDiv1}>
            <h1 className={styles.singleProjectHeading}>ProShop</h1>

            <h3>PRJ CONCEPT</h3>
            <p>
              A Project to create a Ecommerce products shop that includes all
              functionality like userProfile ratings cart checkout payment
              gateways and also Admin panel to see all users orders make/edit or
              delete a product, this project also show you top rated products
              that's rated by all users
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
              <img src={githubImg} alt="githubLogo" /> <span>VIEW REPO</span>
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
          <img src={Project1_1} alt="projectImg" />
          <img src={Project1_2} alt="projectImg" />
        </section>
      </section>

      <hr className={styles.middleLine} />

      <section>
        <div className={styles.projectDescDiv1_1}>
          <section className={styles.projectDescDiv2}>
            <img src={circleImg} alt="img" />
          </section>
          <section className={styles.projectDescDiv1}>
            <h1 className={styles.singleProjectHeading}>Expensify APP</h1>

            <h3>PRJ CONCEPT</h3>
            <p>
              A project to securely store the expenses data of a user. In this
              app you can login by your Google account and add update or delete
              your expenses data. By your Google account you can access this at
              any device and get your expenses history.
            </p>
            <h3>TECH BEING IMPLEMENTED</h3>
            <section className={styles.techDesc}>
              <section>
                <ul>
                  <li>React.js</li>
                  <li>JavaScript(ES6)</li>
                  <li>Firebase</li>
                  <li>HTML5</li>
                </ul>
              </section>
              <section>
                <ul>
                  <li>Express.js</li>
                  <li>Node.js</li>
                  <li>React-Bootstrap</li>
                  <li>Axios</li>
                </ul>
              </section>
            </section>
            <h3>
              <img src={githubImg} alt="githubLogo" /> <span>VIEW REPO</span>
            </h3>
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
            <h1 className={styles.singleProjectHeading}>Indecision APP</h1>

            <h3>PRJ CONCEPT</h3>
            <p>
              A Unique type of todo app. when you enter multiple tasks and click
              on "What Should I Do" it will return you a random task to do from
              the tasks you entered
            </p>
            <h3>TECH BEING IMPLEMENTED</h3>
            <section className={styles.techDesc}>
              <section>
                <ul>
                  <li>React.js</li>
                  <li>Redux</li>
                  <li>JSON data</li>
                </ul>
              </section>
              <section>
                <ul>
                  <li>JavaScript (ES6)</li>
                  <li>SASS</li>
                  <li>HTML5</li>
                </ul>
              </section>
            </section>
            <h3>
              <img src={githubImg} alt="githubLogo" /> <span>VIEW REPO</span>
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
          <img src={Project3_2} alt="projectImg" />
          <img src={Project3_1} alt="projectImg" />
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
              Abdullah Enterprises
            </h1>

            <h3>PRJ CONCEPT</h3>
            <p>
              A website for a local printing press. In this you can see
              animations lottie files Google map integration and lot of other
              things to make UI better and intrested.
            </p>
            <h3>TECH BEING IMPLEMENTED</h3>
            <section className={styles.techDesc}>
              <section>
                <ul>
                  <li>React.js</li>
                  <li>HTML5</li>
                  <li>SASS</li>
                </ul>
              </section>
              <section>
                <ul>
                  <li>Embedded map</li>
                  <li>Lottie Files</li>
                  <li>Animation</li>
                </ul>
              </section>
            </section>
            <h3>
              <img src={githubImg} alt="githubLogo" /> <span>VIEW REPO</span>
            </h3>
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

      <h2>More Projects on Github </h2>
      <hr className={styles.middleLine} />
    </div>
  );
};

export default Projects;
