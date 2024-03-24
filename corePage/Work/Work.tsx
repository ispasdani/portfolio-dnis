"use client";

import React, { useRef } from "react";
import styles from "@/corePage/Work/styles.module.scss";
import SectionCard from "@/components/sectionCard/SectionCard";
import TextBox from "@/components/textBox/TextBox";
import WorkAccordion from "@/components/workAccordion/WorkAccordion";
import { aboutUsSectionFourTexts } from "@/constants/WorkAccordionTexts";
import hover3d from "@/utils/hover";

function Work() {
  const workRef = useRef<HTMLDivElement>(null);

  const hoverHeroOne = hover3d(workRef, { x: 5, y: -5, z: 5 });
  const hoverHeroTwo = hover3d(workRef, { x: 5, y: -1, z: 9 });
  const hoverHeroFive = hover3d(workRef, { x: 15, y: -5, z: 14 });
  const hoverHeroSeven = hover3d(workRef, { x: 17, y: 10, z: 3 });

  return (
    <div className={styles.work} ref={workRef} id="work">
      <div className={styles.workWrapper}>
        <div
          className={styles.sectionCardWrapper}
          style={{
            transform: hoverHeroOne.transform,
            transition: hoverHeroOne.transition,
          }}
        >
          <SectionCard title="WORK" />
        </div>
        <div
          className={styles.workVideo}
          style={{
            transform: hoverHeroFive.transform,
            transition: hoverHeroFive.transition,
          }}
        ></div>
      </div>
      <div className={styles.workContent}>
        <TextBox
          pBackgroundColor="var(--main-neon-green)"
          transform={hoverHeroSeven.transform}
          transition={hoverHeroSeven.transition}
          textAlign="center"
          width="50%"
          margin="5px 15px 80px 15px"
          text="Within this section, I proudly showcase collaborations with several prestigious companies where my contributions have significantly impacted user engagement and success while reaching millions. These partnerships represent a testament to my expertise and ability to drive meaningful results in diverse environments."
        />
        <div
          className={styles.workItems}
          style={{
            transform: hoverHeroTwo.transform,
            transition: hoverHeroTwo.transition,
          }}
        >
          {aboutUsSectionFourTexts.EN.map((item, index) => (
            <WorkAccordion
              title={item.title}
              description={item.description}
              descriptionTwo={item.descriptionTwo}
              descriptionThree={item.descriptionThree}
              descriptionFour={item.descriptionFour}
              imgSrc={item.imgSrc}
              videoSrc={item.videoSrc}
              key={index * 2152776}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
