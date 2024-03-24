import React from "react";
import styles from "@/components/circleCode/styles.module.scss";

const CircleCode = () => {
  return (
    <div className={styles.circleCode}>
      <div>
        public static void Main(...)<span> Programming Courses! </span>COMING
        SOON!
        <span> Programming Courses! Blah!</span>
      </div>
      <div>
        COMING SOON!<span> Programming Courses! </span>COMING SOON!
        <span>Programming Courses! Blah! </span>
      </div>
    </div>
  );
};

export default CircleCode;
