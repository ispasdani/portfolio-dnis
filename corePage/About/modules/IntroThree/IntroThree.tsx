import React from "react";
import styles from "@/corePage/About/modules/IntroThree/styles.module.scss";
import TextBox from "@/components/textBox/TextBox";

const IntroThree = () => {
  return (
    <div className={styles.introThree}>
      <TextBox text="Over the years, I've worked on many projects using different technologies. From Java with Spring Boot to C# with .NET and to testing motors power using JTAG. This was extremely fun but there was something that I was missing. User engagement and recognition. " />
      <TextBox text="That’s why I decided to get really good at building strong interfaces. I wanted to have a direct impact on users." />
      <TextBox text="So I decided to try to become one of the best at building interfaces for websites, mobile apps, desktop software and games." />
      <div className={styles.tipContainer}>
        <p>TIP</p>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default IntroThree;
