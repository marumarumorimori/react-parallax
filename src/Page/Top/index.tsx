import styles from "./style.module.scss";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import "../../components/example/exmaple.css";
import { Bg } from "../../components/bg";
import { Slide } from "../../components/slide";
import { useState } from "react";
import { RotateImages } from "../../components/rotateImages";
import { Banner } from "../../components/banner";
import { AppearText } from "../../components/AppearText";
import { About } from "../../components/About";
import { Footer } from "../../components/footer";
export const Top = () => {
  const [progress, setProgress] = useState<number>();
  const [enterd, setEntered] = useState<boolean>();

  const [secondProgress, setSecondProgress] = useState<number>();
  const [secondEnterd, setSecondEnterd] = useState<boolean>();

  console.log(progress, secondEnterd);

  return (
    <div className={styles.container}>
      <div className={styles.bg}>{/* <Bg /> */}</div>
      <div
        className={styles.context}
        style={{ backgroundColor: enterd ? "#E5E5E5" : "#333" }}
      >
        <div className={styles.mvContainer}>
          <Banner />
        </div>
        <About />
        <Parallax
          onProgressChange={(progress) => setProgress(progress)}
          onEnter={() => setEntered(true)}
          onExit={() => setEntered(false)}
          className={styles.main}
        >
          <Slide />
        </Parallax>
        <AppearText />
        <Footer />
      </div>
    </div>
  );
};
