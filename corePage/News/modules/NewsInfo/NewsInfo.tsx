import React from "react";
import styles from "@/corePage/News/modules/NewsInfo/styles.module.scss";
import TextBox from "@/components/textBox/TextBox";

const NewsInfo = () => {
  return (
    <div className={styles.newsInfoWrapper}>
      <TextBox text="Latest news" fontWeight="bold" />
      <TextBox text="Here, you'll find the latest updates, news, and insights about my projects, along with exclusive content from my YouTube channel and blog. " />
      <TextBox text="Stay tuned for fresh perspectives, behind-the-scenes glimpses, and innovative tech tips." />
    </div>
  );
};

export default NewsInfo;
