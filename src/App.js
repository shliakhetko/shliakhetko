import { AboutMe } from "./sections/AboutMe/AboutMe";
import { Introduction } from "./sections/Introduction/Introduction";
import { Knowledge } from "./sections/Knowledge/Knowledge";
import { Projects } from "./sections/Projects/Projects";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <Introduction />
        <AboutMe />
        <Knowledge />
        <Projects/>
      </div>
    </div>
  );
}

export default App;
