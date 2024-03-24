import React from "react";
import styles from "@/corePage/HeroBox/modules/headerTitleCard/styles.module.scss";

const HeaderTitleCard = () => {
  return (
    <div className={styles.headerTitleCard}>
      <span className={styles.squareEdge} />
      <h1>DANI CODE</h1>
      <span className={styles.squareEdgeTwo} />
    </div>
  );
};

export default HeaderTitleCard;
