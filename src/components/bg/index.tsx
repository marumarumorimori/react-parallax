import styles from "./style.module.scss";
import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import DotImage from "../../image/dot.png";
import MixedImage from "../../image/Mixed.png";

export const Bg = () => {
  const background: BannerLayer = {
    image: DotImage,
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl text-white font-thin">
          Hello World!
        </h1>
      </div>
    ),
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.2],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="absolute inset-0 bg-gradient-to-t" />,
  };

  return (
    <ParallaxBanner
      layers={[background, headline, gradientOverlay]}
      className={styles.banner}
    />
  );
};
