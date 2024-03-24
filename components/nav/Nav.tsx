import React from "react";
import styles from "@/components/nav/styles.module.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/#about" className={styles.navLink}>
        <span className={styles.textSpanOuter}>
          <span className={styles.textSpan}>01</span>
        </span>
        <span className={styles.textSpanOuter}>
          <span className={styles.textSpan}>About</span>
        </span>
        <span className={styles.decorLine} />
      </Link>
      <Link href="/#courses" className={styles.navLink}>
        <span className={styles.textSpanOuter}>
          <span className={styles.textSpan}>02</span>
        </span>
        <span className={styles.textSpanOuter}>
          <span className={styles.textSpan}>Courses</span>
        </span>
        <span className={styles.decorLine} />
      </Link>
      <Link href="/#coaching" className={styles.navLink}>
        <span className={styles.textSpanOuter}>
          <span className={styles.textSpan}>03</span>
        </span>
        <span className={styles.textSpanOuter}>
          <span className={styles.textSpan}>Coaching</span>
        </span>
        <span className={styles.decorLine} />
      </Link>
      <Link href="/#work" className={styles.navLink}>
        <span className={styles.textSpanOuter}>
          <span className={styles.textSpan}>04</span>
        </span>
        <span className={styles.textSpanOuter}>
          <span className={styles.textSpan}>Work</span>
        </span>
        <span className={styles.decorLine} />
      </Link>
      <Link href="/" className={styles.navLink}>
        <span className={styles.textSpanOuter}>
          <span className={styles.textSpan}>05</span>
        </span>
        <span className={styles.textSpanOuter}>
          <span className={styles.textSpan}>CV</span>
        </span>
        <span className={styles.decorLine} />
      </Link>
    </nav>
  );
};

export default Nav;
