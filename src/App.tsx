import { ParallaxProvider } from "react-scroll-parallax";
import { Example } from "./components/example";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Example />
        {/* <Top /> */}
      </ParallaxProvider>
    </>
  );
}

export default App;
