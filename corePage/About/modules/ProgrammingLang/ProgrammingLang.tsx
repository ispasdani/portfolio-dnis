import React from "react";
import styles from "@/corePage/About/modules/ProgrammingLang/styles.module.scss";
import CardBackgroundLines from "@/corePage/CardBackgroundLines/CardBackgroundLines";

const ProgrammingLang = () => {
  return (
    <div className={styles.programmingLang}>
      <CardBackgroundLines />
      <div className={styles.programmingLangTextContainer}>
        <span className={styles.triangleLeft}>&#9651;</span>
        <p>Primary Expertise Zones</p>
      </div>

      <p className={styles.coreTechLong}>React Native</p>
      <p className={styles.coreTechOne}>Java</p>
      <p className={styles.coreTechLongTwo}>Spring Boot</p>
      <p className={styles.coreTechShort}>C#</p>
      <p className={styles.coreTechTwo}>.NET</p>
      <p className={styles.coreTechThree}>React</p>
    </div>
  );
};

export default ProgrammingLang;
