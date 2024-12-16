import { AppearText } from "../../components/AppearText";
// import { Slide } from "../../components/slide";
import styles from "./style.module.scss";

export const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* <Slide /> */}
        <AppearText />
      </div>
    </div>
  );
};
