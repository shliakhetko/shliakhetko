import { AboutMe } from "./sections/AboutMe/AboutMe";
import { Introduction } from "./sections/Introduction/Introduction";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <Introduction />
        <AboutMe/>
      </div>
    </div>
  );
}

export default App;