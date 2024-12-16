import { Parallax } from "react-scroll-parallax";
import styles from "./style.module.scss";
export const AppearText = () => {
  return (
    <div>
      <Parallax
        translateX={[0, 100, "easeOutQuint"]}
        className={styles.message1}
      >
        1
      </Parallax>
      <Parallax
        translateX={[100, 0, "easeOutQuint"]}
        className={styles.message2}
      >
        2
      </Parallax>
      <Parallax
        translateX={[0, 100, "easeOutQuint"]}
        className={styles.message3}
      >
        3
      </Parallax>
    </div>
  );
};
