"use client";

import React, { useRef } from "react";
import styles from "@/corePage/News/styles.module.scss";
import FlexCard from "@/components/flexCard/FlexCard";
import NewsInfo from "@/corePage/News/modules/NewsInfo/NewsInfo";
import hover3d from "@/utils/hover";

function News() {
  const newsRef = useRef<HTMLDivElement>(null);

  const hoverHeroOne = hover3d(newsRef, { x: 5, y: -5, z: 5 });
  const hoverHeroTwo = hover3d(newsRef, { x: 5, y: -1, z: 9 });
  return (
    <div className={styles.news} ref={newsRef}>
      <FlexCard
        gridArea="latestNews"
        backgroundColor="var(--main-white)"
        transform={hoverHeroTwo.transform}
        transition={hoverHeroTwo.transition}
      />
      <FlexCard
        gridArea="newsInfo"
        transform={hoverHeroOne.transform}
        transition={hoverHeroOne.transition}
      >
        <NewsInfo />
      </FlexCard>
    </div>
  );
}

export default News;
