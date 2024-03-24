import React from "react";
import styles from "@/svgs/arrowFilledDown/styles.module.scss";

type ArrowFilledDownProps = {
  fill?: string;
};

const ArrowFilledDown = ({ fill }: ArrowFilledDownProps) => {
  return (
    <svg
      style={{ fill: fill }}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className={styles.arrowFilledDown}
    >
      <path d="M480-360 280-560h400L480-360Z" />
    </svg>
  );
};

export default ArrowFilledDown;
