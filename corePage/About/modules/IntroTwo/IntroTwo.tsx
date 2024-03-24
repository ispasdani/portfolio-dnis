"use client";

import React, { useState } from "react";
import styles from "@/corePage/About/modules/IntroTwo/styles.module.scss";

const IntroTwo = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={styles.introTwo}>
      <p>
        Long story made short about me. Ex professional
        <span
          className={styles.attention}
          onMouseEnter={() => setShowVideo(true)}
          onMouseLeave={() => setShowVideo(false)}
        >
          tennis player
        </span>{" "}
        who realised that he is not going to be the next Rafael Nadal, so dream
        over.
      </p>
      {showVideo && (
        <video loop autoPlay muted className={styles.videoTenis}>
          <source src="/videos/tenis.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default IntroTwo;
