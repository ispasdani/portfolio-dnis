"use client";

import React, { useRef } from "react";
import styles from "@/corePage/Courses/styles.module.scss";
import FlexCard from "@/components/flexCard/FlexCard";
import SectionCard from "@/components/sectionCard/SectionCard";
import CoursesIntro from "./modules/CoursesIntro/CoursesIntro";
import CoursesBox from "./modules/CoursesBox/CoursesBox";
import Emailer from "./modules/Emailer/Emailer";
import hover3d from "@/utils/hover";

function Courses() {
  const coursesRef = useRef<HTMLDivElement>(null);

  const hoverHeroOne = hover3d(coursesRef, { x: 5, y: -5, z: 13 });
  const hoverHeroTwo = hover3d(coursesRef, { x: 11, y: -1, z: 9 });
  const hoverHeroFive = hover3d(coursesRef, { x: 7, y: -5, z: 14 });
  const hoverHeroFour = hover3d(coursesRef, { x: 9, y: -14, z: 17 });

  return (
    <div className={styles.courses} ref={coursesRef} id="courses">
      <FlexCard
        gridArea="coursesTitle"
        sectionFlexCard={true}
        transform={hoverHeroOne.transform}
        transition={hoverHeroOne.transition}
      >
        <SectionCard title="COURSES" />
      </FlexCard>
      <FlexCard
        gridArea="emailer"
        backgroundColor="var(--main-white)"
        transform={hoverHeroTwo.transform}
        transition={hoverHeroTwo.transition}
      >
        <Emailer />
      </FlexCard>
      <FlexCard
        gridArea="coursesIntro"
        transform={hoverHeroFive.transform}
        transition={hoverHeroFive.transition}
      >
        <CoursesIntro />
      </FlexCard>
      <FlexCard
        gridArea="coursesCard"
        whiteSpace="nowrap"
        backgroundColor="var(--main-white)"
        transform={hoverHeroFour.transform}
        transition={hoverHeroFour.transition}
      >
        <CoursesBox />
      </FlexCard>
    </div>
  );
}

export default Courses;
