"use client";

import React, { useRef } from "react";
import styles from "@/corePage/About/styles.module.scss";
import FlexCard from "@/components/flexCard/FlexCard";
import SectionCard from "@/components/sectionCard/SectionCard";
import IntroOne from "@/corePage/About/modules/IntroOne/IntroOne";
import IntroTwo from "@/corePage/About/modules/IntroTwo/IntroTwo";
import IntroThree from "@/corePage/About/modules/IntroThree/IntroThree";
import ProgrammingLang from "@/corePage/About/modules/ProgrammingLang/ProgrammingLang";
import hover3d from "@/utils/hover";

function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const hoverHeroOne = hover3d(aboutRef, { x: 5, y: -5, z: 5 });
  const hoverHeroThree = hover3d(aboutRef, { x: 7, y: -20, z: 10 });
  const hoverHeroSeven = hover3d(aboutRef, { x: 17, y: -6, z: 3 });
  const hoverHeroFive = hover3d(aboutRef, { x: 15, y: -5, z: 14 });
  const hoverHeroSix = hover3d(aboutRef, { x: 11, y: -9, z: 7 });

  return (
    <div className={styles.about} ref={aboutRef} id="about">
      <FlexCard
        gridArea="aboutBanner"
        sectionFlexCard={true}
        transform={hoverHeroOne.transform}
        transition={hoverHeroOne.transition}
      >
        <SectionCard title="ABOUT" />
      </FlexCard>
      <FlexCard
        gridArea="introOne"
        transform={hoverHeroThree.transform}
        transition={hoverHeroThree.transition}
      >
        <IntroOne />
      </FlexCard>
      <FlexCard
        gridArea="introTwo"
        transform={hoverHeroFive.transform}
        transition={hoverHeroFive.transition}
      >
        <IntroTwo />
      </FlexCard>
      <FlexCard
        gridArea="programmingLang"
        transform={hoverHeroSix.transform}
        transition={hoverHeroSix.transition}
      >
        <ProgrammingLang />
      </FlexCard>
      <FlexCard
        gridArea="introThree"
        transform={hoverHeroSeven.transform}
        transition={hoverHeroSeven.transition}
      >
        <IntroThree />
      </FlexCard>
    </div>
  );
}

export default About;
