"use client";

import React, { useState } from "react";
import styles from "@/components/workAccordion/styles.module.scss";
import Image from "next/image";
import ArrowExpandMore from "@/svgs/arrowExpandMore/ArrowExpandMore";
import VideoCard from "../videoCard/VideoCard";

type WorkAccordionProps = {
  title: string;
  imgSrc?: string;
  description: string | undefined;
  descriptionTwo?: string | undefined;
  descriptionThree?: string | undefined;
  descriptionFour?: string | undefined;
  videoSrc?: string;
  imgSrcOne?: string;
};

const WorkAccordion = ({
  title,
  imgSrc,
  description,
  descriptionTwo,
  descriptionThree,
  descriptionFour,
  videoSrc,
}: WorkAccordionProps) => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <div className={styles.workAccordion}>
      <div
        className={styles.workAccordionTop}
        onClick={() => setExpand(!expand)}
      >
        <span className={styles.lineDecor}></span>
        <div className={styles.workAccordionLeft}>
          <span className={styles.decorCircle} />
          <p>
            <span>{title}</span>
          </p>
        </div>
        <ArrowExpandMore />
      </div>
      {expand && (
        <div className={styles.expand}>
          <p>{title}</p>
          {description && <p>{description}</p>}
          {imgSrc && (
            <div className={styles.workImageWrapper}>
              <Image
                src={imgSrc}
                width={800}
                height={280}
                alt="Image Source"
                className={styles.workAccordionImageSrc}
              />
            </div>
          )}
          {descriptionTwo && <p>{descriptionTwo}</p>}
          {videoSrc && (
            <div className={styles.workVideoWrapper}>
              <video loop autoPlay muted className={styles.videoPlayer}>
                <source src={`${videoSrc}`} type="video/mp4" />
              </video>
            </div>
          )}
          {descriptionThree && <p>{descriptionThree}</p>}
          {descriptionFour && <p>{descriptionFour}</p>}
        </div>
      )}
    </div>
  );
};

export default WorkAccordion;
