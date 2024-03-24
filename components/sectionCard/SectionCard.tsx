import React from "react";
import styles from "@/components/sectionCard/styles.module.scss";

type SectionCardProps = {
  title: string;
  fontSize?: string;
  flex?: string;
};

const SectionCard = ({ title, fontSize, flex }: SectionCardProps) => {
  return (
    <div className={styles.sectionCard} style={{ flex: flex }}>
      {title}
      <svg
        width="77"
        height="77"
        viewBox="0 0 77 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fontSize: fontSize }}
      >
        <mask id="path-1-inside-1_167_7" fill="white">
          <path d="M0 0H77V77H0V0Z" />
        </mask>
        <path
          d="M77 77V78H78V77H77ZM76 0V77H78V0H76ZM77 76H0V78H77V76Z"
          fill="white"
          mask="url(#path-1-inside-1_167_7)"
        />
        <line
          x1="76.6464"
          y1="75.5203"
          x2="1.47978"
          y2="0.353636"
          stroke="white"
        />
      </svg>
    </div>
  );
};

export default SectionCard;
