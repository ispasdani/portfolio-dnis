import React from "react";
import styles from "@/wrappers/MainPageBackground/styles.module.scss";

// type MainPageBackgroundProps = {
//   children: React.ReactNode;
// };

function MainPageBackground() {
  const circles = [];
  for (let i = 1; i <= 500; i++) {
    circles.push(
      <div key={i} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </div>
    );
  }
  return <div className={styles.mainPageBackground}>{circles}</div>;
}

export default MainPageBackground;
