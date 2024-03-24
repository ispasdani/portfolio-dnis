import React from "react";
import styles from "@/corePage/Courses/modules/Emailer/styles.module.scss";
import Logo from "@/components/logo/Logo";
import TextBox from "@/components/textBox/TextBox";

const Emailer = () => {
  return (
    <div className={styles.emailer}>
      <div className={styles.emailerTop}>
        <Logo />
        <h2>Unlock Your Development Potential</h2>
      </div>
      <TextBox text="Sign up for updates to accelerate your development velocity" />

      <form action="" className={styles.emailButton}>
        <label htmlFor="emailSub"></label>
        <input
          type="emal"
          id="emailSub"
          name="emailSub"
          className={styles.inputEmail}
          placeholder="Enter your email..."
        />
        <input type="submit" className={styles.inputSubmit} />
      </form>
    </div>
  );
};

export default Emailer;
