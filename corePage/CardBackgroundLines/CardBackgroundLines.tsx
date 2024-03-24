"use client";

import React, { useState } from "react";
import styles from "@/corePage/CardBackgroundLines/styles.module.scss";

type CardBackgroundLinesProps = {
  numberOfLines?: boolean;
};

const CardBackgroundLines = ({ numberOfLines }: CardBackgroundLinesProps) => {
  const [key, setKey] = useState(0);

  const restartAnimation = () => {
    setKey((prevKey) => prevKey + 1);
  };
  return (
    <div className={styles.lines}>
      {numberOfLines ? (
        <div className={styles.line}></div>
      ) : (
        <>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </>
      )}
    </div>
  );
};

export default CardBackgroundLines;
