import { Parallax } from "react-scroll-parallax";
import styles from "./style.module.scss";

export const Slide = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.slideContainer}>
          <Parallax speed={20} className={styles.left}></Parallax>
          <Parallax speed={-5} className={styles.centerRight}>
            <div className={styles.center} />
            <div className={styles.right} />
          </Parallax>
        </div>

        <Parallax
          translateX={["-500px", "0px"]}
          easing="easeInQuad"
          className={styles.text}
        >
          Neque porro quisquam est qui dolorem ipsum
        </Parallax>
      </div>
    </>
  );
};
