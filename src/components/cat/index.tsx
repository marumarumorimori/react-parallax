import { useParallax } from "react-scroll-parallax";

export const Cat = () => {
  const moon = useParallax<HTMLDivElement>({
    scale: [1, 0, "easeInOut"],
  });

  const brown = useParallax<HTMLDivElement>({
    scale: [2, 0, "easeInOut"],
  });

  return (
    <>
      <div className="moon" ref={moon.ref}></div>
      <div className="brown" ref={brown.ref}></div>
    </>
  );
};
