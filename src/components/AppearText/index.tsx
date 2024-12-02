import { Parallax } from "react-scroll-parallax";
import styles from "./style.module.scss";
export const AppearText = () => {
  return (
    <div className={styles.messageContainer}>
      <Parallax translateX={[20, 0, "easeOutQuint"]} className={styles.message}>
        <div className={styles.messageInner}>
          <p>ああああ</p>
        </div>
      </Parallax>
      <Parallax translateX={[0, 36, "easeOutQuint"]} className={styles.message}>
        <div className={styles.messageInner}>
          <p>ああああ</p>
        </div>
      </Parallax>
      <Parallax translateX={[20, 0, "easeOutQuint"]} className={styles.message}>
        <div className={styles.messageInner}>
          <p>ああああ</p>
        </div>
      </Parallax>
    </div>
  );
};
