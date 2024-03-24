"use client";

import React from "react";
import styles from "@/corePage/ScrollBand/styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollBandProps = {
  directionX: string;
  justifyContent: string;
  text: string;
  iconHex: string;
};

function ScrollBand({
  directionX,
  justifyContent,
  text,
  iconHex,
}: ScrollBandProps) {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, directionX]);

  return (
    <div
      className={styles.scrollBand}
      style={{ justifyContent: justifyContent }}
    >
      <motion.p className={styles.motionText} style={{ x: x }}>
        <span>{text}</span>
        <span>{iconHex}</span>
        <span>{text}</span>
        <span>&#x2632;</span>
      </motion.p>
    </div>
  );
}

export default ScrollBand;
