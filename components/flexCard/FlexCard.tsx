"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/components/flexCard/styles.module.scss";
import { motion } from "framer-motion";

type FlexCardProps = {
  width?: string;
  height?: string;
  flex?: string;
  gridArea?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
  border?: string;
  sectionFlexCard?: boolean;
  whiteSpace?: string;
  transform?: string;
  transition?: string;
};

const FlexCard = ({
  width,
  height,
  children,
  flex,
  gridArea,
  backgroundColor,
  border,
  sectionFlexCard,
  whiteSpace,
  transform,
  transition,
}: FlexCardProps) => {
  const componentRef = useRef<HTMLDivElement>(null); // Provide explicit type assertion
  const [componentWidth, setComponentWidth] = useState<number>(0);

  useEffect(() => {
    if (componentRef.current) {
      setComponentWidth(componentRef.current.offsetWidth);
    }
  }, []);

  const dragConstraints =
    typeof window !== "undefined"
      ? {
          left: -200,
          right: componentWidth,
          top: -200,
          bottom:
            window.innerHeight - (componentRef.current?.offsetHeight || 0),
        }
      : undefined;

  return (
    <motion.div
      ref={componentRef}
      drag
      dragConstraints={dragConstraints}
      dragMomentum={false}
      className={`${
        sectionFlexCard ? styles.flexCardSection : styles.flexCard
      }`}
      style={{
        width: width,
        height: height,
        flex: flex,
        gridArea: gridArea,
        backgroundColor: backgroundColor,
        border: border,
        whiteSpace: whiteSpace,
        transform: transform,
        transition: transition,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FlexCard;
