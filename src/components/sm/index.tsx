import { Parallax } from "react-scroll-parallax";
import styles from "./style.module.scss";

export const Sm = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <Parallax disabled={isMobile} speed={100} className={styles.box}>
      <p>モバイルでは適応されない</p>
    </Parallax>
  );
};
