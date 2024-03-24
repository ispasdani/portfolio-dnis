import React from "react";
import styles from "@/os-svgs/terminalIcon/styles.module.scss";
import ArrowFilledDown from "@/svgs/arrowFilledDown/ArrowFilledDown";

type TerminalIconProps = {
  title: string;
  imgSrc: string;
  id: string;
};

const TerminalIcon = ({ title, imgSrc, id }: TerminalIconProps) => {
  return (
    <div className={styles.terminalIcon}>
      <div className={styles.hoverStaticModal}>
        <p>{title}</p>
        <ArrowFilledDown fill="var(--main-white)" />
      </div>
      <img
        src={imgSrc}
        alt={`Terminal Icon: ${id}`}
        className={styles.terminalIconSrc}
      />
    </div>
  );
};

export default TerminalIcon;
