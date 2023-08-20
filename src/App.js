import { AboutMe } from "./sections/AboutMe/AboutMe";
import { Introduction } from "./sections/Introduction/Introduction";
import { Knowledge } from "./sections/Knowledge/Knowledge";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <Introduction />
        <AboutMe />
        <Knowledge />
      </div>
    </div>
  );
}

export default App;
