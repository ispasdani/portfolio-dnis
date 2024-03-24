"use client";

import React from "react";
import styles from "@/os-components/folder/styles.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

type FolderProps = {
  title: string;
  iconSrc: string;
};

const Folder = ({ title, iconSrc }: FolderProps) => {
  return (
    <motion.div className={styles.folder} drag dragMomentum={false}>
      <div className={styles.folderIcon}>
        <Image
          src={iconSrc}
          width={50}
          height={40}
          alt="Games Folder Icon"
          className={styles.icon}
        />
      </div>
      <p className={styles.folderTitle}>{title}</p>
    </motion.div>
  );
};

export default Folder;
