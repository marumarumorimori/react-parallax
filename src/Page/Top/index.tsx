import styles from "./style.module.scss";
import { Parallax } from "react-scroll-parallax";
import { Slide } from "../../components/slide";
import { useState } from "react";
import { AppearText } from "../../components/AppearText";

import { Sm } from "../../components/sm";
export const Top = () => {
  const [progress, setProgress] = useState<number>();
  const [enterd, setEntered] = useState<boolean>();
  return (
    <div className={styles.container}>
      <div className={styles.bg}>{/* <Bg /> */}</div>
      <div
        className={styles.context}
        style={{ backgroundColor: enterd ? "#E5E5E5" : "#333" }}
      >
        <Parallax
          onProgressChange={(progress) => setProgress(progress)}
          onEnter={() => setEntered(true)}
          onExit={() => setEntered(false)}
          className={styles.main}
        >
          <Slide />
        </Parallax>
        <Sm />
        <AppearText />
        {/* <Footer /> */}
      </div>
    </div>
  );
};
