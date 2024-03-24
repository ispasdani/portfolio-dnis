import React from "react";
import styles from "@/corePage/About/modules/IntroOne/styles.module.scss";
import TextBox from "@/components/textBox/TextBox";

const IntroOne = () => {
  return (
    <div className={styles.introOne}>
      <div className={styles.textWrap}>
        <p>
          I’m <span>Dani</span>, a passionate and accomplished{" "}
          <span>Software Engineer</span> with a focus on crafting exceptional
          digital experiences.
        </p>
        <TextBox text="With a proven track record of excellence in frontend and backend development, mobile apps, and desktop applications, I bring creativity, innovation, and technical expertise to every project I undertake." />
      </div>
      <svg
        className={styles.arrowLeftSvg}
        width="144"
        height="16"
        viewBox="0 0 144 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M143.707 8.70711C144.098 8.31658 144.098 7.68342 143.707 7.29289L137.343 0.928932C136.953 0.538408 136.319 0.538408 135.929 0.928932C135.538 1.31946 135.538 1.95262 135.929 2.34315L141.586 8L135.929 13.6569C135.538 14.0474 135.538 14.6805 135.929 15.0711C136.319 15.4616 136.953 15.4616 137.343 15.0711L143.707 8.70711ZM0 9H143V7H0V9Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default IntroOne;
