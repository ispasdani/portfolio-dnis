import React from "react";
import styles from "@/corePage/Coaching/modules/CoachingGridCard/styles.module.scss";
import CardBackgroundLines from "@/corePage/CardBackgroundLines/CardBackgroundLines";

const CoachingGridCard = () => {
  return (
    <div className={styles.coachingGridCard}>
      <CardBackgroundLines />
      <span className={styles.coachingTriangle}>&#9651;</span>
      <span className={styles.greenLine} />
      <p className={styles.coachingText}>
        Ready to level up your skills and career in the tech industry? Whether
        you're looking to transition into IT, land your dream job, or launch
        your own startup, I'm here to guide you every step of the way. Explore
        tailored coaching sessions designed to address your unique challenges
        and goals.
      </p>
    </div>
  );
};

export default CoachingGridCard;
