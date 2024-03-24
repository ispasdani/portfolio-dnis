"use client";

import React, { useEffect, useState } from "react";
import styles from "@/corePage/HeroBox/modules/QuoteCard/styles.module.scss";
import CardBackgroundLines from "@/corePage/CardBackgroundLines/CardBackgroundLines";

const QuoteCard = () => {
  const [changeQuote, setChangeQuote] = useState<number>(0);

  const handleClick = () => {
    setChangeQuote((prevCount) => (prevCount + 1) % 2);
  };

  useEffect(() => {}, [changeQuote]);

  return (
    <div className={styles.quoteCard}>
      <CardBackgroundLines />
      <span className={styles.triangleLeft}>&#9651;</span>
      <span className={styles.triangleRight}>&#9651;</span>
      <span className={styles.squareChange} onClick={handleClick} />
      {changeQuote === 0 && (
        <div className={styles.firstQuote}>
          <p>Try Again.</p>
          <p>Fail More.</p>
          <p>Fail Better.</p>
        </div>
      )}
      {changeQuote === 1 && (
        <div className={styles.secondQuote}>
          <p>Thoughts become perception, perception becomes reality.</p>
          <p>Alter your thoughts, alter your reality.</p>
        </div>
      )}
    </div>
  );
};

export default QuoteCard;
