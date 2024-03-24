import React from "react";
import styles from "@/corePage/Coaching/modules/CoachingWindow/styles.module.scss";
import ComingSoonBand from "@/components/comingSoonBand/ComingSoonBand";

const CoachingWindow = () => {
  return (
    <div className={styles.coachingWindow}>
      <ComingSoonBand />
      <ComingSoonBand transform="rotate(-50deg);" left="10%" />
    </div>
  );
};

export default CoachingWindow;
