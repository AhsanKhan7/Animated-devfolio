import React from "react";
import styles from "./BottomPara.module.scss";

const BottomPara = () => {
  return (
    <div className={styles.bottomPara}>
      <h1>
        It all boils down to
        <strong> understanding </strong>
        your user base. In most cases, it’s the design that decides your
        position between
        <strong> making </strong> or
        <section className={styles.cracked}>
          <span>breaking</span>
          <span>breaking</span>
          <span>breaking</span>
        </section>
        a business.
      </h1>
    </div>
  );
};

export default BottomPara;
