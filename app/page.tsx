import styles from "@/app/styles.module.scss";
import Footer from "@/components/footer/Footer";
import About from "@/corePage/About/About";
import Coaching from "@/corePage/Coaching/Coaching";
import Courses from "@/corePage/Courses/Courses";
import HeroBox from "@/corePage/HeroBox/HeroBox";
import News from "@/corePage/News/News";
import ScrollBand from "@/corePage/ScrollBand/ScrollBand";
import Work from "@/corePage/Work/Work";
import dynamic from "next/dynamic";

const Scene = dynamic(
  () => import("@/components/backgroundTorus/BackgroundTorus"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className={styles.mainPage}>
      <div className={styles.scene}>
        <Scene />
      </div>
      <HeroBox />
      <ScrollBand
        directionX="-1200"
        justifyContent="flex-start"
        text="CONTINUOUSLY STRIVING TO SURPRISE AND INSPIRE BY CHALLENGING THE
          ORDINARY"
        iconHex="&#x2632;"
      />
      <News />
      <ScrollBand
        directionX="1200"
        justifyContent="flex-end"
        text="CONTINUOUSLY STRIVING TO SURPRISE AND INSPIRE BY CHALLENGING THE
          ORDINARY"
        iconHex="&#x2632;"
      />
      <About />
      <ScrollBand
        directionX="-1200"
        justifyContent="flex-start"
        text="CONTINUOUSLY STRIVING TO SURPRISE AND INSPIRE BY CHALLENGING THE
          ORDINARY"
        iconHex="&#x2632;"
      />
      <Work />
      <ScrollBand
        directionX="1200"
        justifyContent="flex-end"
        text="CONTINUOUSLY STRIVING TO SURPRISE AND INSPIRE BY CHALLENGING THE
          ORDINARY"
        iconHex="&#x2632;"
      />
      <Coaching />
      <ScrollBand
        directionX="-1200"
        justifyContent="flex-start"
        text="CONTINUOUSLY STRIVING TO SURPRISE AND INSPIRE BY CHALLENGING THE
          ORDINARY"
        iconHex="&#x2632;"
      />
      <Courses />
      <ScrollBand
        directionX="1200"
        justifyContent="flex-end"
        text="CONTINUOUSLY STRIVING TO SURPRISE AND INSPIRE BY CHALLENGING THE
          ORDINARY"
        iconHex="&#x2632;"
      />
      <Footer />
    </main>
  );
}
