import React from "react";
import styles from "@/components/courseCard/styles.module.scss";

const CourseCard = () => {
  return (
    <div className={styles.courseCard}>
      <div className={styles.cardContent}>
        <div className={styles.videosNumber}></div>
        <div className={styles.cardPrice}></div>
        <div className={styles.courseTitle}></div>
      </div>
    </div>
  );
};

export default CourseCard;
