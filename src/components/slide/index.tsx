import { Parallax } from "react-scroll-parallax";
import styles from "./style.module.scss";
import { Bg } from "../bg";

export const Slide = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.slideContainer}>
          <Parallax speed={20} className={styles.left}>
            <div />
          </Parallax>
          <Parallax speed={-5} className={styles.centerRight}>
            <div className={styles.center} />
            <div className={styles.right}>
              <Bg />
            </div>
          </Parallax>
          <Parallax speed={-5}></Parallax>
        </div>

        <Parallax
          translateX={["-500px", "0px"]}
          easing="easeInQuad"
          className={styles.text}
        >
          <span>
            TEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT TEXT TEXTTEXT
            TEXTTEXTTEXT TEXT TEXTTEXT TEXT TEXT
          </span>
        </Parallax>
      </div>
    </>
  );
};
