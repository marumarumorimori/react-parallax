import { ParallaxProvider } from "react-scroll-parallax";
import { Top } from "./Page/Top";
// import { Page } from "./Page/Second";
// import { Progress } from "./components/progress";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Top />
        {/* <Page /> */}
        {/* <Progress /> */}
      </ParallaxProvider>
    </>
  );
}

export default App;
