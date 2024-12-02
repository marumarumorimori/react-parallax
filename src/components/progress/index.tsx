import styles from "./style.module.scss";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

export const Progress = () => {
  const [progress, setProgress] = useState<number>();
  const [enterd, setEntered] = useState<boolean>();
  console.log(progress, enterd);

  return (
    <Parallax
      onProgressChange={(progress) => setProgress(progress)}
      onEnter={() => setEntered(true)}
      onExit={() => setEntered(false)}
      className={styles.element}
    />
  );
};
