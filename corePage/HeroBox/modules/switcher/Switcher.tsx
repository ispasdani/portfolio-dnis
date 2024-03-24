"use client";

import React, { useState, useEffect } from "react";
import styles from "@/corePage/HeroBox/modules/switcher/styles.module.scss";
import HelpIcon from "@/svgs/helpIcon/HelpIcon";
import OpenOS from "@/components/openOS/OpenOS";

const Switcher = () => {
  const [state, setState] = useState(false);

  useEffect(() => {}, [state]);

  return (
    <div className={styles.switcherContainer}>
      <HelpIcon
        type="danger"
        message="dnisOS is under development.. but you can check it out"
      />
      <OpenOS />
    </div>
  );
};

export default Switcher;
