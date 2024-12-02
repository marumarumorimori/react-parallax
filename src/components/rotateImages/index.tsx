import { Parallax } from "react-scroll-parallax";
import styles from "./style.module.scss";

export const RotateImages = () => {
  return (
    <div className={styles.imgs}>
      <Parallax rotateY={[0, 360]} speed={10} className={styles.img}>
        <img src="https://jp.unicharmpet.com/content/dam/sites/jp_unicharmpet_com/pet/magazine/cat/kitten/img/010029/010029_01_img.jpg" />
      </Parallax>
      <Parallax rotateY={[0, 360]} speed={10} className={styles.img2}>
        <img src="https://jp.unicharmpet.com/content/dam/sites/jp_unicharmpet_com/pet/magazine/cat/kitten/img/010029/010029_01_img.jpg" />
      </Parallax>
      <Parallax rotateY={[0, 360]} speed={10} className={styles.img3}>
        <img src="https://jp.unicharmpet.com/content/dam/sites/jp_unicharmpet_com/pet/magazine/cat/kitten/img/010029/010029_01_img.jpg" />
      </Parallax>
    </div>
  );
};
