import React from "react";
import styles from "@/components/comingSoonBand/styles.module.scss";

type ComingSoonBandProps = {
  transform?: string;
  left?: string;
};

const ComingSoonBand = ({ transform, left }: ComingSoonBandProps) => {
  return (
    <div
      className={`${styles.comingSoonBand}`}
      style={{ transform: transform, left: left }}
    >
      <div>
        COMING SOON!<span> Programming Courses! </span>COMING SOON!
        <span> Programming Courses! Blah!</span>
      </div>
      <div>
        COMING SOON!<span> Programming Courses! </span>COMING SOON!
        <span>Programming Courses! Blah! </span>
      </div>
    </div>
  );
};

export default ComingSoonBand;
