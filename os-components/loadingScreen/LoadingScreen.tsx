import React from "react";
import styles from "@/os-components/loadingScreen/styles.module.scss";

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.glasmorphism}>
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
      </div>
    </div>
  );
};

export default LoadingScreen;
