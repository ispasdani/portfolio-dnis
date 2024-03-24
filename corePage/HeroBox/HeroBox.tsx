"use client";

import React, { useRef } from "react";
import styles from "@/corePage/HeroBox/styles.module.scss";
import FlexCard from "@/components/flexCard/FlexCard";
import HeaderTitleCard from "@/corePage/HeroBox/modules/headerTitleCard/HeaderTitleCard";
import Switcher from "@/corePage/HeroBox/modules/switcher/Switcher";
import Header from "@/corePage/HeroBox/modules/Header/Header";
import VideoCard from "@/components/videoCard/VideoCard";
import IntroCard from "@/corePage/HeroBox/modules/IntroCard/IntroCard";
import FOMCardStatic from "@/corePage/HeroBox/modules/FOMCardStatic/FOMCardStatic";
import QuoteCard from "@/corePage/HeroBox/modules/QuoteCard/QuoteCard";
import hover3d from "@/utils/hover";

function HeroBox() {
  const headerRef = useRef<HTMLDivElement>(null);

  const hoverHeroOne = hover3d(headerRef, { x: 5, y: -5, z: 5 });
  // const hoverHeroTwo = hover3d(headerRef, { x: 10, y: -20, z: 10 });
  const hoverHeroThree = hover3d(headerRef, { x: 7, y: -20, z: 10 });
  const hoverHeroFour = hover3d(headerRef, { x: 20, y: -14, z: 20 });
  const hoverHeroFive = hover3d(headerRef, { x: 15, y: -5, z: 14 });
  // const hoverHeroSix = hover3d(headerRef, { x: 11, y: -9, z: 7 });
  const hoverHeroSeven = hover3d(headerRef, { x: 17, y: -6, z: 3 });

  return (
    <div className={styles.header} ref={headerRef}>
      <FlexCard
        gridArea="titleCard"
        backgroundColor="var(--main-neon-green)"
        transform={hoverHeroOne.transform}
        transition={hoverHeroOne.transition}
      >
        <HeaderTitleCard />
      </FlexCard>
      <FlexCard
        gridArea="switcher"
        backgroundColor="var(--main-white)"
        border="1px solid var(--border-grey)"
      >
        <Switcher />
      </FlexCard>
      <FlexCard
        gridArea="introCard"
        transform={hoverHeroThree.transform}
        transition={hoverHeroThree.transition}
      >
        <IntroCard />
      </FlexCard>
      <FlexCard
        gridArea="videoCard"
        transform={hoverHeroFour.transform}
        transition={hoverHeroFour.transition}
      >
        <VideoCard src="/videos/me.mp4" />
      </FlexCard>
      <FlexCard
        gridArea="navCard"
        transform={hoverHeroFive.transform}
        transition={hoverHeroFive.transition}
      >
        <Header />
      </FlexCard>
      <FlexCard gridArea="findMoreCard" backgroundColor="var(--main-black)">
        <FOMCardStatic />
      </FlexCard>
      <FlexCard
        gridArea="quoteCard"
        transform={hoverHeroSeven.transform}
        transition={hoverHeroSeven.transition}
      >
        <QuoteCard />
      </FlexCard>
    </div>
  );
}

export default HeroBox;
