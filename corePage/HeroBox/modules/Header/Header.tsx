import React from "react";
import styles from "@/corePage/HeroBox/modules/Header/styles.module.scss";
import TextBox from "@/components/textBox/TextBox";
import Logo from "@/components/logo/Logo";
import Nav from "@/components/nav/Nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <TextBox
          text="Click around, hold and drag, explore every corner, and see what secrets
      you can uncover. Enjoy the adventure!"
        />
        <Logo />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
