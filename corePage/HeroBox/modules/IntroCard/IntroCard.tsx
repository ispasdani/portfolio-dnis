import React from "react";
import styles from "@/corePage/HeroBox/modules/IntroCard/styles.module.scss";
import Image from "next/image";
import { soMeIcons } from "@/utils/SoMeIcons";
import Link from "next/link";
import ArrowFilledDown from "@/svgs/arrowFilledDown/ArrowFilledDown";

const IntroCard = () => {
  return (
    <div className={styles.introCard}>
      <div className={styles.introCardTop}>
        <p className={styles.introText}>
          <span>Hi</span>, my name is Dani.
        </p>
        <p className={styles.introText}>
          I am an <span>award-winning</span> Software Engineer, with a focus on
          crafting exceptional digital experiences.
        </p>
      </div>
      <div className={styles.introCardBottom}>
        {soMeIcons.map((icon, index) => (
          <Link
            href={`${icon.link}`}
            className={styles.iconLink}
            key={index * 835299}
          >
            {/* THIS IS A MODAL */}
            <div className={styles.hoverStaticModal}>
              <p>{icon.title}</p>
              <ArrowFilledDown fill="var(--main-neon-green)" />
            </div>
            {/* THIS IS A MODAL */}
            <Image
              src={icon.icon}
              width={0}
              height={0}
              alt={`Social media icon, ${icon.title}`}
              className={styles.soMeIcon}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IntroCard;
