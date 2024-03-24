"use client";

import React, { useRef } from "react";
import styles from "@/corePage/Coaching/styles.module.scss";
import FlexCard from "@/components/flexCard/FlexCard";
import SectionCard from "@/components/sectionCard/SectionCard";
import CoachingGridCard from "./modules/CoachingGridCard/CoachingGridCard";
import CoachingWindow from "./modules/CoachingWindow/CoachingWindow";
import hover3d from "@/utils/hover";

function Coaching() {
  const coachingRef = useRef<HTMLDivElement>(null);

  const hoverHeroOne = hover3d(coachingRef, { x: 5, y: -5, z: 5 });
  const hoverHeroTwo = hover3d(coachingRef, { x: 5, y: -1, z: 9 });
  const hoverHeroFive = hover3d(coachingRef, { x: 15, y: -5, z: 14 });

  return (
    <section className={styles.coaching} ref={coachingRef} id="coaching">
      <FlexCard
        gridArea="coachingTitle"
        sectionFlexCard={true}
        transform={hoverHeroOne.transform}
        transition={hoverHeroOne.transition}
      >
        <SectionCard title="COACHING" />
      </FlexCard>
      <FlexCard
        gridArea="coachingText"
        transform={hoverHeroTwo.transform}
        transition={hoverHeroTwo.transition}
      >
        <CoachingGridCard />
      </FlexCard>
      <FlexCard
        gridArea="coachingWindow"
        backgroundColor="var(--main-white)"
        transform={hoverHeroFive.transform}
        transition={hoverHeroFive.transition}
      >
        <CoachingWindow />
      </FlexCard>
    </section>
  );
}

export default Coaching;
