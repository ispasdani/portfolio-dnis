import React from "react";
import styles from "@/components/textBox/styles.module.scss";

type TextBoxProps = {
  text: string;
  fontWeight?: string;
  width?: string;
  textAlign?: "center";
  transform?: string;
  transition?: string;
  divBackgroundColor?: string;
  pBackgroundColor?: string;
  margin?: string;
};

const TextBox = ({
  text,
  fontWeight,
  width,
  textAlign,
  transform,
  transition,
  divBackgroundColor,
  pBackgroundColor,
  margin,
}: TextBoxProps) => {
  return (
    <div
      className={styles.textBox}
      style={{
        fontWeight: fontWeight,
        width: width,
        textAlign: textAlign,
        transform: transform,
        transition: transition,
        backgroundColor: divBackgroundColor,
        margin: margin,
      }}
    >
      <p style={{ backgroundColor: pBackgroundColor }}>{text}</p>
    </div>
  );
};

export default TextBox;
