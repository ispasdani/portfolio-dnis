import React from "react";
import styles from "@/os-components/closeOsBtn/styles.module.scss";
import Link from "next/link";

const CloseOsBtn = () => {
  return (
    <Link className={styles.closeOsBtn} href={"/"}>
      <img
        src="/osIcons/close.svg"
        alt="Close OS button"
        className={styles.btnIcon}
      />
    </Link>
  );
};

export default CloseOsBtn;
