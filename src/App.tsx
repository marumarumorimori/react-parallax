import { ParallaxProvider } from "react-scroll-parallax";
import { Top } from "./Page/Top";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Top />
      </ParallaxProvider>
    </>
  );
}

export default App;
