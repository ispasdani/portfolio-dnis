import React from "react";
import styles from "@/corePage/Courses/modules/CoursesIntro/styles.module.scss";
import TextBox from "@/components/textBox/TextBox";

const CoursesIntro = () => {
  return (
    <div className={styles.coursesIntro}>
      <TextBox text="I am dedicated to provide courses that empower developers with the skills they need to succeed in today's rapidly evolving technological landscape." />
      <TextBox text="You will be able to easily master any programming language and remain competitive in the ever-evolving IT market." />
      <TextBox text="Start your programming journey with an introduction to the world of code and basic concepts." />
    </div>
  );
};

export default CoursesIntro;
