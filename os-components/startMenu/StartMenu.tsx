import React from "react";
import styles from "@/os-components/startMenu/styles.module.scss";

const StartMenu = () => {
  return (
    <div className={styles.startMenu}>
      <div className={styles.startMenuContent}>
        <div className={styles.startMenuItem}>
          <p>Personalize</p>
          <span className={styles.itemDecorLine} />
        </div>
        <div className={styles.startMenuItem}>
          <p>Games</p>
          <span className={styles.itemDecorLine} />
        </div>
        <div className={styles.startMenuItem}>
          <p>Terminal</p>
          <span className={styles.itemDecorLine} />
        </div>
        <div className={styles.startMenuItem}>
          <p>Theme</p>
          <span className={styles.itemDecorLine} />
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
