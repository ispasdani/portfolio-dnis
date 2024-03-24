import React from "react";
import styles from "@/components/logo/styles.module.scss";
import ArrowFilledDown from "@/svgs/arrowFilledDown/ArrowFilledDown";

const Logo = () => {
  return (
    <div className={styles.logo}>
      {/* THIS IS A MODAL */}
      <div className={styles.hoverStaticModalPin}>
        <div className={styles.hoverStaticModal}>
          <p>dnisOS Terminal !!COMING SOON!!</p>
          <ArrowFilledDown fill="var(--main-neon-green)" />
        </div>
      </div>
      {/* THIS IS A MODAL */}
      <p className={styles.lessSign}>&lt;</p>
      <span className={styles.skullSign}>&#x2620;</span>
      <p className={styles.greaterSign}>/&gt;</p>
    </div>
  );
};

export default Logo;
