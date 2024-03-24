"use client";

import React, { useState } from "react";
import styles from "@/components/timeButton/styles.module.scss";

const TimeButton = () => {
  const [value, setValue] = useState(false);

  return (
    <div className={styles.switchButton} onClick={() => setValue(true)}>
      <span
        className={styles.switchSelectorLeft}
        style={{
          transform: `${value ? "translate( -90px, -50%)" : ""}`,
          width: `${value ? "50px" : "66px"}`,
        }}
      />
      <p>Past</p>
      <p>Present</p>
    </div>
  );
};

export default TimeButton;
