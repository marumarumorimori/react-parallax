import styles from "./style.module.scss";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

export const Progress = () => {
  const [progress, setProgress] = useState<number>();
  const [enter, setEnter] = useState<boolean>();

  console.log("q", progress, enter);
  return (
    <div
      className={`${styles.container} ${enter ? styles.light : styles.dark}`}
    >
      <Parallax
        onProgressChange={(p) => setProgress(p)}
        onEnter={() => setEnter(true)}
        onExit={() => setEnter(false)}
        className={styles.progress}
      />
      <p className={styles.moji}>moji</p>
    </div>
  );
};
