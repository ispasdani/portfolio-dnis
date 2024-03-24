import React from "react";
import styles from "@/components/openOS/styles.module.scss";
import Link from "next/link";

const OpenOS = () => {
  return (
    <div className={styles.openOs}>
      <Link href={"/dnisOS"} className={styles.hovered}>
        <p>dnisOS</p>
        <p className={styles.osSkullIcon}>&#x2620;</p>
      </Link>

      <div className={styles.initial}>
        <svg
          width="55"
          height="43"
          viewBox="0 0 55 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.mainIcon}
        >
          <path
            d="M2.95677 41.25L27.5 2.78846L52.0432 41.25H2.95677Z"
            fill="none"
            stroke="#CDFF00"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
};

export default OpenOS;
