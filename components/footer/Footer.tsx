"use client";

import React, { useRef } from "react";
import styles from "@/components/footer/styles.module.scss";
import Nav from "../nav/Nav";
import Link from "next/link";
import { soMeIcons } from "@/utils/SoMeIcons";
import ArrowFilledDown from "@/svgs/arrowFilledDown/ArrowFilledDown";
import Image from "next/image";
import hover3d from "@/utils/hover";

function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  const hoverHeroOne = hover3d(footerRef, { x: 5, y: -5, z: 5 });
  const hoverHeroTwo = hover3d(footerRef, { x: 5, y: -1, z: 9 });
  const hoverHeroFive = hover3d(footerRef, { x: 15, y: -5, z: 14 });

  return (
    <div className={styles.footer} ref={footerRef}>
      <div
        className={styles.footerContent}
        style={{
          transform: hoverHeroOne.transform,
          transition: hoverHeroOne.transition,
        }}
      >
        <div className={styles.footerContentLeft}>
          <Nav />
        </div>
        <div className={styles.footerContentRight}>
          <h3>Contact</h3>
          <div className={styles.contentWrapped}>
            <p>Wanna work with me?</p>
            <p>Send me an email.</p>
          </div>
          <p>ispasdani14@gmail.com</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div
          className={styles.footerSoMe}
          style={{
            transform: hoverHeroTwo.transform,
            transition: hoverHeroTwo.transition,
          }}
        >
          {soMeIcons.map((icon, index) => (
            <Link
              href={`${icon.link}`}
              className={styles.iconLink}
              key={index * 2489329}
            >
              {/* THIS IS A MODAL */}
              <div className={styles.hoverStaticModal}>
                <p>{icon.title}</p>
                <ArrowFilledDown fill="var(--main-white)" />
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
        <div
          className={styles.footerCopyRights}
          style={{
            transform: hoverHeroFive.transform,
            transition: hoverHeroFive.transition,
          }}
        >
          <p>Copyright @ 2024 - Daniel-Nicolae Ispas</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
